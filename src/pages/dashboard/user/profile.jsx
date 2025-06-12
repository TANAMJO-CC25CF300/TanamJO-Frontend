import React, { useEffect, useState } from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import { useParams } from "react-router-dom";
import NotificationModal from "@/components/landingPages/notifikasi/notificationModal";
import ProfileHeader from "@/components/Dashboard/user/profile-header";
import FormInput from "@/components/ui/formInput";
import { userService } from "@/services/userService";
import axios from "axios";

export default function ProfilePage() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: null,
    userPoints: 0,
    userLevel: "",
  });
  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    type: "",
    message: "",
  });
  const [finishedTasks, setFinishedTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: name === "gender" ? (value === "none" ? null : value) : value,
    }));
  };

  const fetchUserData = async () => {
    try {
      const response = await userService.getUserById(id);
      const data = response.data?.user;

      setUser({
        name: data?.name || "",
        email: data?.email || "",
        gender: data?.gender || null,
        userPoints: data?.poin || 0,
        userLevel: data?.level_name || "",
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: error.response?.data?.message || "Error fetching user data",
      });
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  useEffect(() => {
    const fetchFinishedTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `http://localhost:4545/checkin?userId=${id}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );
        console.log("API Response:", res.data);

        const tasks = res.data?.data?.tasks || [];
        const finished = tasks.filter((task) => task.done);
        setFinishedTasks(finished);

        console.log("Finished Tasks:", finished);
      } catch (err) {
        console.error("Error fetching finished tasks:", err);
        setFinishedTasks([]);
      }
    };

    if (id) {
      fetchFinishedTasks();
    }
  }, [id]);

  const handleSubmit = async () => {
    // Client-side validation
    if (!user.name.trim()) {
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: "Name cannot be empty",
      });
      return;
    }

    if (!user.email.trim()) {
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: "Email cannot be empty",
      });
      return;
    }

    try {
      // First update the user's points
      await userService.updateUserPoints(id);

      // Then update the user's profile
      const response = await userService.updateUserProfile(id, user);

      // Refresh user data to get updated points
      await fetchUserData();

      setModal({
        isOpen: true,
        title: "Success",
        type: "success",
        message: "Profile updated successfully",
      });
    } catch (error) {
      console.error("Error updating user data:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Error updating user data";
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: errorMessage,
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Profile Header */}
        <ProfileHeader user={user} finishedTasks={finishedTasks} />

        {/* Profile Information */}
        <div className="bg-white rounded-[20px] shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Edit Profile
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-8">
              <FormInput
                label={
                  <span>
                    Full Name
                    <span className="text-red-500 ml-1 font-nunito font-medium tracking-wide leading-normal">
                      *
                    </span>
                  </span>
                }
                name="name"
                type="text"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <FormInput
                label={
                  <span>
                    Email
                    <span className="text-red-500 ml-1 font-nunito font-medium tracking-wide leading-normal">
                      *
                    </span>
                  </span>
                }
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-3">
                  Gender
                  <span className="text-red-500 ml-1 font-nunito font-medium tracking-wide leading-normal">
                    *
                  </span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={user.gender === "male"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0098C3] border-gray-300 focus:ring-[#0098C3]"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={user.gender === "female"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0098C3] border-gray-300 focus:ring-[#0098C3]"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#0098C3] text-white text-base font-medium rounded-2xl hover:bg-[#0082A7] transition-all duration-200"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NotificationModal
        isOpen={modal.isOpen}
        title={modal.title}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </DashboardLayout>
  );
}
