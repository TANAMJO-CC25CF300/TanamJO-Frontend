import React from "react";
import { CalendarDays, User } from "lucide-react";
import tomatoPlant from "../assets/tomatoPlant.png"

const Card3 = ({
  image = tomatoPlant,
  category = "FOOD CROPS",
  date = "MARCH 28, 2024",
  author = "ADMIN",
  title = "What technology is used in vertical farming?",
}) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-2xl"
        />
        <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="px-3 py-4">
        <div className="flex items-center text-xs text-gray-500 mb-2 gap-4">
          <div className="flex items-center gap-1">
            <CalendarDays size={14} /> {date}
          </div>
          <div className="flex items-center gap-1">
            <User size={14} /> {author}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card3;
