import React, { useState } from "react";
import { Bell, Search, User, LogOut, ChevronDown } from "lucide-react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl hidden md:block">
        <div className="relative">
          <input
            type="text"
            placeholder="Search plants, tasks, or guides..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      {/* Mobile Search Button */}
      <button className="md:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors">
        <Search size={20} className="text-gray-600" />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative p-2 hover:bg-gray-50 rounded-xl transition-colors group">
          <Bell size={20} className="text-gray-600 group-hover:text-gray-900" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Profile */}
        <div className="relative">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center group-hover:ring-4 group-hover:ring-blue-100 transition-all">
              <User size={20} className="text-white" />
            </div>
            <div className="hidden md:block">
              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">John Doe</h4>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              <div className="h-px bg-gray-200 my-1"></div>
              <button 
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => {
                  // Add logout logic here
                  console.log('Logout clicked');
                }}
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