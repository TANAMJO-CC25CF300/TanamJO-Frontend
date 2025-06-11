import React from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import AddPlant from "@/components/MyPlant/AddPlant";

const MyPlantEmptyPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col items-center justify-start">
        <AddPlant />
      </div>
    </DashboardLayout>
  );
};

export default MyPlantEmptyPage;
