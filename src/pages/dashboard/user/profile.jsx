import React from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
    
  const { id } = useParams();

  console.log(id);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    gender: "Male",
    userPoints: 1250,
    userLevel: "Silver",
  };

  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Profile Header */}
        <div className="mb-8 bg-white rounded-[20px] shadow-sm p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-[#0098C3] flex items-center justify-center text-white text-4xl font-semibold">
                {user.name.split(' ').map(n => n[0]).join('')}
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
                  value={user.name}
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
                  value={user.email}
                  className="w-full px-5 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-[15px] font-medium text-gray-700 mb-3">
                  Gender
                </label>
                <div className="relative">
                  <select
                    value={user.gender}
                    className="w-full px-5 py-4 text-base text-gray-900 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-all duration-200"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
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
