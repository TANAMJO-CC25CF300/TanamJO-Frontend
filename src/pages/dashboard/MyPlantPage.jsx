import React from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";

export default function MyPlantPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 min-h-[calc(100vh-160px)] px-4 md:px-6">
          {/* Card Plant */}
          <div className="w-full order-1 lg:order-1">
            <CardPlant />
          </div>
          {/* Daily Tasks */}
          <div className="w-full order-2 lg:order-2">
            <DailyTasks />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
