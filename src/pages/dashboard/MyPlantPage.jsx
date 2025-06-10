import React from "react";
import LeftSidebar from "@/layout/dashboard/left-sidebar";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";

export default function MyPlantPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex">
      {/* Sidebar */}
      <LeftSidebar />
      {/* Main Content */}
      <div className="flex-1 ml-20 md:ml-64 flex flex-col">
        {/* Main Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-12 min-h-[calc(100vh-160px)]">
          {/* Card Plant */}
          <div className="row-span-2 md:row-start-2 gap-4">
            <CardPlant />
          </div>
          {/* Daily Tasks */}
          <div className="w-[520px] row-span-2 md:row-start-2">
            <DailyTasks />
          </div>
        </div>
        {/* Footer */}
        <footer className="w-full text-center text-xs text-gray-400 py-4 mt-auto">
          © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
        </footer>
      </div>
    </div>
  );
}
