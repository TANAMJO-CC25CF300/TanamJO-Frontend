import React from "react";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { StarFour } from "@phosphor-icons/react";

const Card2 = ({ image, type, title, description }) => {
  return (
    <div className="w-[412px] h-[473px] flex flex-col gap-3 p-[15px] px-[13px] border border-gray-300 rounded-[30px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[382px] h-[275px] object-cover rounded-[20px]"
        />
        <button className="absolute top-0 right-0 bg-[#5B8C51] -500 p-3 rounded-tr-lg shadow-md">
          <ArrowCircleUpRight size={24} className="text-white" />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <StarFour size={20} className="text-yellow-500" />{" "}
        <p className="text-gray-600 text-sm font-medium">{type}</p>
      </div>

      <h3 className="text-xl font-bold text-black">{title}</h3>

      <p className="text-sm text-gray-600 border-t-1 border-gray-300 pt-2">
        {description}
      </p>
    </div>
  );
};

export default Card2;
