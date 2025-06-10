import React from "react";
import LeftSidebar from "@/layout/dashboard/left-sidebar";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";

export default function MyPlantPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex">
      {/* Sidebar */}
      <LeftSidebar />
      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Main Section */}
        <div className="flex flex-1 justify-center items-center gap-32 px-12 min-h-[calc(100vh-160px)]">
          {/* Card Plant */}
          <div className="flex justify-center items-center">
            <CardPlant />
          </div>
          {/* Daily Tasks */}
          <div className="w-[520px] flex-shrink-0">
            <DailyTasks />
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full text-center text-xs text-gray-400 py-4">
          © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
        </footer>
      </div>
    </div>
  );
}
