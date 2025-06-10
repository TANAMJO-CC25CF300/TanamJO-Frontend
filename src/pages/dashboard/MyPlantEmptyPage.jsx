import React from "react";
import LeftSidebar from "../../layout/dashboard/left-sidebar";
import AddPlant from "../../components/MyPlant/AddPlant";

const MyPlant = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 flex flex-col items-center justify-start px-8 py-8">
          <AddPlant />
          <footer className="mt-auto text-center w-full text-xs text-gray-400">
            © 2024 TanamJO – Platform Edukasi dan Pemantauan Kesehatan Tanaman.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default MyPlant;
