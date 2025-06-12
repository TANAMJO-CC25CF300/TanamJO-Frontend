import React from "react";
import { motion } from "framer-motion";
import { Calendar, Droplet, Sun, Thermometer } from "lucide-react";
import PhaseIcon from "@/assets/MyPlant/Phase.svg";
import PlantIcon from "@/assets/MyPlant/plant.svg";
import DescIcon from "@/assets/MyPlant/description.svg";
import TomatoImg from "@/assets/MyPlant/persiapan,benih,transplanting,vegetatif.png";
import BgPlant from "@/assets/MyPlant/bgPlant.png";

const CardPlant = ({ plants }) => {
  if (!plants || plants.length === 0) {
    return (
      <div className="rounded-2xl border border-gray-300 p-4 md:p-6 w-full max-w-full md:max-w-[579px] mx-auto bg-white">
        <p className="text-gray-500 text-center">No plants found</p>
      </div>
    );
  }

  const plant = plants[0]; // Get the most recent plant

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  // Helper function to format phase name
  const formatPhaseName = (phase) => {
    if (!phase) return "Preparation";
    return phase.charAt(0).toUpperCase() + phase.slice(1);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="rounded-2xl border border-gray-300 p-4 md:p-6 w-full max-w-full md:max-w-[579px] mx-auto bg-white"
    >
      {/* Plant Header */}
      <motion.div variants={itemVariants} className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {plant.name || "Unnamed Plant"}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Phase: {formatPhaseName(plant.phase)}
        </p>
      </motion.div>

      {/* Plant Age */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar className="w-5 h-5" />
          <span className="text-lg font-medium">
            {plant.plant_age || plant.ageInput || "0"} DAP
          </span>
        </div>
      </motion.div>

      {/* Plant Description */}
      <motion.div variants={itemVariants} className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Description</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {plant.description || "No description available"}
        </p>
      </motion.div>

      {/* Plant Care Tips */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Care Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Droplet className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-blue-700">Watering</p>
              <p className="text-xs text-blue-600">Keep soil moist</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Sun className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-yellow-700">Sunlight</p>
              <p className="text-xs text-yellow-600">6-8 hours daily</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <Thermometer className="w-5 h-5 text-green-500" />
            <div>
              <p className="text-sm font-medium text-green-700">Temperature</p>
              <p className="text-xs text-green-600">20-25°C ideal</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardPlant;
