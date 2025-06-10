import React, { useEffect, useState } from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
    
  const API_URL = import.meta.env.VITE_API_URL;
  console.log(API_URL);
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    userPoints: 0,
    userLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        const data = response.data?.data;

        setUser({
          name: data?.user?.name || "",
          email: data?.user?.email || "",
          gender: data?.user?.gender || "other",
          userPoints: 0,
          userLevel: "Silver",
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  console.log(id);

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Profile Header */}
        <div className="mb-8 bg-white rounded-[20px] shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-[#0098C3] flex items-center justify-center text-white text-4xl font-semibold">
                {user.name ? user.name.split(' ').map(n => n[0]).join('') : 'U'}
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{user.email}</p>
              <div className="flex flex-col md:flex-row gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                  Level: {user.userLevel}
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700">
                  Points: {user.userPoints}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-[20px] shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Personal Information</h2>
          <div className="max-w-3xl">
            <div className="space-y-8">
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-3">
                  Gender
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
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
                      value="Female"
                      checked={user.gender === "female"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0098C3] border-gray-300 focus:ring-[#0098C3]"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={user.gender === "other"}
                      onChange={handleChange}
                      className="w-4 h-4 text-[#0098C3] border-gray-300 focus:ring-[#0098C3]"
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto px-8 py-4 bg-[#0098C3] text-white text-base font-medium rounded-2xl hover:bg-[#0082A7] transition-all duration-200">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
