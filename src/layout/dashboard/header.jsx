import React, { useState } from "react";
import {
  Bell,
  Search,
  User,
  LogOut,
  ChevronDown,
  Settings,
  Key,
  Menu,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ setIsOpen, isOpen, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // Clear all auth data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <header
      className={`bg-white border-b border-gray-200 py-3 px-3 sm:px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40 w-full transition-all
        ${isMobile && isOpen ? "backdrop-blur-md shadow-md" : ""}`}
    >
      {/* Tombol Menu di sisi kiri */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2 bg-white rounded-lg hover:bg-gray-50 border border-gray-200 lg:hidden flex items-center justify-center transition-all
            ${isOpen ? "opacity-0 pointer-events-none" : "mr-2"}`}
          style={{ minWidth: 40, minHeight: 40 }}
        >
          <Menu size={20} className="text-gray-700" />
        </button>
      )}
      {/* Spacer agar tombol burger tetap di kiri */}
      {isMobile && <div className="flex-1" />}
      {/* Right Section */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Notification */}

        {/* Profile */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center group-hover:ring-4 group-hover:ring-blue-100 transition-all">
              <User size={20} className="text-white" />
            </div>
            <div className="hidden md:block">
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate max-w-[120px]">
                {user.name}
              </h4>
              <p className="text-xs text-gray-500 truncate max-w-[120px]">
                {user.email}
              </p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <div className="h-px bg-gray-200 my-1"></div>
              <Link
                to={`/profile/${user.id}`}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <User size={16} />
                Profile
              </Link>
              <Link
                to={`/update-password/${user.id}`}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
              >
                <Key size={16} />
                Update Password
              </Link>
              <div className="h-px bg-gray-200 my-1"></div>
              <button
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
