import React from "react";
import DashboardLayout from "@/layout/dashboard/layout";
import StatCard from "@/components/Dashboard/StatCard";
import { Sprout, Thermometer, Droplets } from "lucide-react";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Plants",
      value: "24",
      icon: Sprout,
      trend: { type: "up", value: "+2.5%" }
    },
    {
      title: "Healthy Plants",
      value: "21",
      icon: Sprout,
      trend: { type: "up", value: "+1.2%" }
    },
    {
      title: "Average Temperature",
      value: "24°C",
      icon: Thermometer
    },
    {
      title: "Average Humidity",
      value: "65%",
      icon: Droplets
    }
  ];

  return (
    <DashboardLayout>
      <div className="mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
