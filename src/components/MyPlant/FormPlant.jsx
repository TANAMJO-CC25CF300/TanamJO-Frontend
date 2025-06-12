import React from "react";
import { useForm } from "react-hook-form";

const phases = [
  "Preparation (-7 - 0 DAS)",
  "Seedling ( 1 - 21 DAP)",
  "Transplanting (22 - 26 DAP)",
  "Vegetative (26 - 55 DAP)",
  "Flowering & Fruiting (55 - 90 DAP)",
];

const FormPlant = ({ open, onClose, onSubmit }) => {
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
  });

  if (!open) return null;

  const onFormSubmit = (data) => {
    onSubmit && onSubmit(data);
    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 backdrop-blur-sm"
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
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Plant Name
            </label>
            <input
              className="md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none text-sm md:text-base"
              placeholder="Plant Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">Phase</label>
            <select
              className="md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none text-sm md:text-base"
              {...register("phase", { required: true })}
            >
              <option value="" disabled>
                Select your phase
              </option>
              {phases.map((phase) => (
                <option key={phase} value={phase}>
                  {phase}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Plant Age
            </label>
            <input
              className="md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none text-sm md:text-base"
              placeholder="1 Days after Seeding or 1 Days after planting"
              {...register("age", { required: true })}
            />
          </div>
          <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-2 md:gap-4">
            <label className="text-gray-700 text-sm md:text-base">
              Description
            </label>
            <textarea
              className="md:col-span-4 border rounded px-3 py-2 w-full focus:outline-none resize-none text-sm md:text-base"
              rows={3}
              placeholder="Description"
              {...register("description")}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#5B8C51] text-white rounded-[8px] px-6 md:px-8 py-2 text-sm md:text-base font-semibold hover:bg-[#4a7342] transition"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPlant;
