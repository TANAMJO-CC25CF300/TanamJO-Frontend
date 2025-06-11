import React from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import AddPlant from "@/components/MyPlant/AddPlant";
import LeftSidebar from "@/layout/dashboard/left-sidebar";

const MyPlantEmptyPage = () => {
  return (
    <DashboardLayout>
      <LeftSidebar />
      <div className="flex-1 flex flex-col items-center justify-start px-8 py-8">
        <AddPlant />
        <footer className="mt-auto text-center w-full text-xs text-gray-400">
          © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
        </footer>
      </div>
    </DashboardLayout>
  );
};

export default MyPlantEmptyPage;
