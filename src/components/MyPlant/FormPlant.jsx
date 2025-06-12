import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { plantService } from "../../services/plantService";

const phases = [
  {
    value: "preparation",
    label: "Preparation",
    description: "(-7 - 0 DAS)",
  },
  {
    value: "seeding",
    label: "Seeding",
    description: "(1 - 21 DAP)",
  },
  {
    value: "transplanting",
    label: "Transplanting",
    description: "(22 - 26 DAP)",
  },
  {
    value: "vegetative",
    label: "Vegetative",
    description: "(26 - 55 DAP)",
  },
  {
    value: "generative",
    label: "Generative",
    description: "(55 - 90 DAP)",
  },
];

const FormPlant = ({ open, onClose, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phase: "",
      age: "",
      description: "",
    },
    mode: "onChange",
  });

  // Check authentication when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Please login to add a plant");
    }
  }, []);

  if (!open) return null;

  const onFormSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Check if user is logged in
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Validate required fields
      if (!data.name || !data.age || !data.description) {
        throw new Error("Field name, age, dan description wajib diisi.");
      }

      // TODO: Replace with actual user ID from your auth system
      const userId = 1;

      const result = await plantService.addPlant(userId, data);

      if (onSubmit) {
        onSubmit(result);
      }

      reset();
      onClose();
      // Navigate to MyPlantPage after successful submission
      navigate("/MyPlantPage");
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.message.includes("login")) {
        navigate("/login");
      } else {
        setError(error.message || "Failed to add plant. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black/30"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 w-full max-w-2xl relative border border-gray-200 z-10 mx-4">
        <button
          className="absolute top-2 md:top-4 right-2 md:right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg md:text-xl font-semibold mb-1">
          Add your Plant
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
          Create a new plant list for the system
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            <p className="font-medium">Error</p>
            <p className="text-sm">{error}</p>
            {error.includes("login") && (
              <button
                onClick={() => navigate("/login")}
                className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
              >
                Go to Login
              </button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Plant Name <span className="text-red-500">*</span>
            </label>
            <input
              className={`md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none text-sm md:text-base ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Plant Name"
              {...register("name", {
                required: "Nama tanaman wajib diisi",
                minLength: {
                  value: 3,
                  message: "Nama tanaman minimal 3 karakter",
                },
              })}
            />
            {errors.name && (
              <span className="md:col-span-4 text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">Phase</label>
            <div className="md:col-span-4">
              <select
                className={`w-full border rounded px-3 py-2 focus:outline-none text-sm md:text-base ${
                  errors.phase ? "border-red-500" : "border-gray-300"
                }`}
                {...register("phase", { required: "Phase wajib dipilih" })}
              >
                <option value="" disabled>
                  Select your phase
                </option>
                {phases.map((phase) => (
                  <option key={phase.value} value={phase.value}>
                    {phase.label} {phase.description}
                  </option>
                ))}
              </select>
              {errors.phase && (
                <span className="text-red-500 text-sm">
                  {errors.phase.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Plant Age <span className="text-red-500">*</span>
            </label>
            <input
              className={`md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none text-sm md:text-base ${
                errors.age ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1 DAP or 1 DAS"
              {...register("age", {
                required: "Umur tanaman wajib diisi",
                pattern: {
                  value: /^\d+\s+(DAP|DAS)$/,
                  message: "Format harus berupa 'angka DAP' atau 'angka DAS'",
                },
              })}
            />
            {errors.age && (
              <span className="md:col-span-4 text-red-500 text-sm">
                {errors.age.message}
              </span>
            )}
          </div>
          <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className={`md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none resize-none text-sm md:text-base ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              rows={3}
              placeholder="Description"
              {...register("description", {
                required: "Deskripsi tanaman wajib diisi",
                minLength: {
                  value: 10,
                  message: "Deskripsi minimal 10 karakter",
                },
              })}
            />
            {errors.description && (
              <span className="md:col-span-4 text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting || !!error}
              className={`bg-[#5B8C51] text-white rounded-[8px] px-6 md:px-8 py-2 text-sm md:text-base font-semibold transition ${
                isSubmitting || !!error
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#4a7342]"
              }`}
            >
              {isSubmitting ? "Adding Plant..." : "Add Plant"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPlant;
