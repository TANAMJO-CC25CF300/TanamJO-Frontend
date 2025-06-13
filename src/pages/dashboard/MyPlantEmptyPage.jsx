import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/layout/dashboard/layout";
import AddPlant from "@/components/MyPlant/AddPlant";
import { plantService } from "@/services/plantService";

const MyPlantEmptyPage = () => {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkUserAndPlants = async () => {
      if (isChecking) return;

      try {
        setIsChecking(true);
        // Check if user is logged in
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Get user ID from token or your auth system
        const userId = 1; // TODO: Replace with actual user ID from your auth system

        const response = await plantService.getUserPlants(userId);

        if (response && response.length > 0) {
          navigate("/MyPlantPage", { replace: true });
          return;
        }
      } catch (error) {
        console.error("Error checking user and plants:", error);
        if (error.message.includes("login")) {
          navigate("/login");
        } else {
          setError(error.message);
        }
      } finally {
        setIsChecking(false);
      }
    };

    checkUserAndPlants();
  }, [navigate, isChecking]);

  const handlePlantAdded = async (result) => {
    try {
      const userId = 1; // TODO: Replace with actual user ID from your auth system
      const response = await plantService.getUserPlants(userId);

      if (response && response.length > 0) {
        navigate("/MyPlantPage", { replace: true });
        return;
      }
    } catch (error) {
      console.error("Error handling plant addition:", error);
      setError(error.message);
    }
  };

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col items-center justify-start">
        <AddPlant onPlantAdded={handlePlantAdded} />
      </div>
    </DashboardLayout>
  );
};

export default MyPlantEmptyPage;
