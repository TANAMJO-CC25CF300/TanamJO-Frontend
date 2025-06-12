import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardLayout from "@/layout/dashboard/layout";
import CardPlant from "@/components/MyPlant/CardPlant";
import DailyTasks from "@/components/MyPlant/DailyTasks";
import { plantService } from "@/services/plantService";

const LoadingSkeleton = () => (
  <div className="flex-1 flex flex-col">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 sm:gap-4 min-h-[calc(100vh-160px)] px-2 sm:px-3 md:px-4 lg:px-6">
      {/* Card Plant Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full order-1 lg:order-1"
      >
        <div className="rounded-2xl border border-gray-300 p-4 md:p-6 w-full max-w-full md:max-w-[579px] mx-auto bg-white">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Daily Tasks Skeleton */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full order-2 lg:order-2"
      >
        <div className="rounded-2xl border border-gray-300 p-4 md:p-6 w-full max-w-full md:max-w-[579px] mx-auto bg-white">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default function MyPlantPage() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserAndPlants = async () => {
      try {
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Get user ID from token or your auth system
        const userId = 1; // TODO: Replace with actual user ID from your auth system

        const data = await plantService.getUserPlants(userId);

        if (!data || data.length === 0) {
          // If no plants found, redirect to empty page
          navigate("/MyPlantEmptyPage");
          return;
        }

        setPlants(data);
      } catch (error) {
        console.error("Error checking user and plants:", error);
        if (error.message.includes("login")) {
          navigate("/login");
        } else {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    checkUserAndPlants();
  }, [navigate]);

  if (loading)
    return (
      <DashboardLayout>
        <LoadingSkeleton />
      </DashboardLayout>
    );

  if (error)
    return (
      <DashboardLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="text-red-500 bg-red-50 p-4 rounded-lg">
            Error: {error}
          </div>
        </motion.div>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-1 flex flex-col"
      >
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 sm:gap-4 min-h-[calc(100vh-160px)] px-2 sm:px-3 md:px-4 lg:px-6">
          {/* Card Plant */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full order-1 lg:order-1"
          >
            <CardPlant plants={plants} />
          </motion.div>
          {/* Daily Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full order-2 lg:order-2"
          >
            <DailyTasks />
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
