import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/layout/dashboard/layout";
import AddPlant from "@/components/MyPlant/AddPlant";
import { plantService } from "@/services/plantService";

const MyPlantEmptyPage = () => {
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

        // If user has plants, redirect to plant page
        if (data && data.length > 0) {
          navigate("/MyPlantPage");
          return;
        }
      } catch (error) {
        console.error("Error checking user and plants:", error);
        if (error.message.includes("login")) {
          navigate("/login");
        }
      }
    };

    checkUserAndPlants();
  }, [navigate]);

  const handlePlantAdded = (result) => {
    // Navigate to the plant page after successful addition
    navigate("/MyPlantPage");
  };

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col items-center justify-start">
        <AddPlant onPlantAdded={handlePlantAdded} />
      </div>
    </DashboardLayout>
  );
};

export default MyPlantEmptyPage;
