import React, { useEffect, useState } from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import { useParams } from "react-router-dom";
import NotificationModal from "@/components/landingPages/notifikasi/notificationModal";
import ProfileHeader from "@/components/Dashboard/user/profile-header";
import FormInput from "@/components/ui/formInput";
import { userService } from "@/services/userService";

export default function UpdatePasswordPage() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: null,
    userPoints: 0,
    userLevel: "",
  });

  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    title: "",
    type: "",
    message: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Client-side validation
    if (!userPassword.oldPassword.trim()) {
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: "Current password is required",
      });
      return;
    }

    if (!userPassword.newPassword.trim()) {
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: "New password is required",
      });
      return;
    }

    if (userPassword.newPassword !== userPassword.confirmPassword) {
      setModal({
        isOpen: true,
        title: "Error",
        type: "error",
        message: "New password and confirm password do not match",
      });
      return;
    }

    try {
      await userService.updateUserPassword(id, {
        oldPassword: userPassword.oldPassword,
        newPassword: userPassword.newPassword,
      });

      setModal({
        isOpen: true,
        title: "Success",
        type: "success",
        message: "Password updated successfully",
      });

      // Clear password fields after successful update
      setUserPassword({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error updating password:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Error updating password";
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
        <ProfileHeader user={user} />

        {/* Password Update Form */}
        <div className="bg-white rounded-[20px] shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Update Password
          </h2>
          <div className="max-w-3xl">
            <div className="space-y-8">
              <FormInput
                type="password"
                name="oldPassword"
                label="Current Password"
                value={userPassword.oldPassword}
                onChange={handleChange}
                placeholder="Enter your current password"
                required
              />
              <FormInput
                type="password"
                name="newPassword"
                label="New Password"
                value={userPassword.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm New Password"
                value={userPassword.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your new password"
                required
              />
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#0098C3] text-white text-base font-medium rounded-2xl hover:bg-[#0082A7] transition-all duration-200"
                  onClick={handleSubmit}
                >
                  Update Password
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
