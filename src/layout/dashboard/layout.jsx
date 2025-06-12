import React from "react";
import LeftSidebar from "./left-sidebar";
import Header from "./header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-40">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search plants, tasks, or guides..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-sm"
            />
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
        </div>
        {/* Mobile Search Button */}
        <button className="md:hidden p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <Search size={20} className="text-gray-600" />
        </button>
        {/* Right Section */}
        <div className="flex items-center gap-6"></div>
      </header>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <LeftSidebar />
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <Header />
          {/* Main Content Area */}
          <div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 overflow-auto">
            <div className="max-w-[1600px] mx-auto w-full">{children}</div>
          </div>
          {/* Footer */}
          <footer className="w-full text-center text-xs text-gray-400 py-4">
            © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
          </footer>
        </div>
      </div>
    </div>
  );
}
