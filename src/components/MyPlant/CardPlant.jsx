import React from "react";
import PhaseIcon from "@/assets/MyPlant/Phase.svg";
import PlantIcon from "@/assets/MyPlant/plant.svg";
import DescIcon from "@/assets/MyPlant/description.svg";
import TomatoImg from "@/assets/MyPlant/persiapan,benih,transplanting,vegetatif.png";
import BgPlant from "@/assets/MyPlant/bgPlant.png";

const CardPlant = ({
  name = "My Tomato",
  phase = "1 Benih",
  age = "2 DAP",
  desc = "This is my favorite Plant",
  image = TomatoImg,
}) => {
  return (
    <div className="w-full max-w-full md:max-w-[579px] mx-auto h-auto min-h-[400px] md:min-h-[670px] bg-white rounded-[30px] shadow-md flex flex-col p-4 md:p-8 relative overflow-x-auto border border-[#070D05]/20">
      {/* Background kuning dekoratif */}
      <div
        className="absolute left-0 top-16 w-[120px] md:w-[200px] lg:w-[320px] h-[120px] md:h-[250px] lg:h-[400px] bg-yellow-200 rounded-full -z-10"
        style={{ filter: "blur(2px)" }}
      />
      <img
        src={BgPlant}
        alt="bg plant"
        className="absolute left-0 top-20 w-[120px] md:w-[200px] lg:w-[320px] h-[120px] md:h-[250px] lg:h-[400px] object-contain -z-0"
        style={{ pointerEvents: "none" }}
      />
      {/* Judul */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 relative z-10">
        {name}
      </h2>
      <div className="flex flex-col md:flex-row flex-1 items-center relative z-10">
        {/* Gambar Tanaman */}
        <img
          src={image}
          alt={name}
          className="w-[120px] md:w-[200px] lg:w-[320px] h-[120px] md:h-[250px] lg:h-[400px] object-contain drop-shadow-lg relative z-10"
        />
        {/* Info Card */}
        <div className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-0 md:ml-8 w-full md:w-auto">
          {/* Phase */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-sm w-full md:min-w-[180px]">
            <img
              src={PhaseIcon}
              alt="Phase"
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <div>
              <div className="font-semibold text-gray-800 text-sm md:text-base">
                Phase
              </div>
              <div className="text-xs md:text-sm text-gray-500">{phase}</div>
            </div>
          </div>
          {/* Plant Age */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-sm w-full md:min-w-[180px]">
            <img
              src={PlantIcon}
              alt="Plant Age"
              className="w-6 h-6 md:w-7 md:h-7"
            />
            <div>
              <div className="font-semibold text-gray-800 text-sm md:text-base">
                Plant Age
              </div>
              <div className="text-xs md:text-sm text-gray-500">{age}</div>
            </div>
          </div>
          {/* Desc */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-sm w-full md:min-w-[180px]">
            <img src={DescIcon} alt="Desc" className="w-6 h-6 md:w-7 md:h-7" />
            <div>
              <div className="font-semibold text-gray-800 text-sm md:text-base">
                Desc
              </div>
              <div className="text-xs md:text-sm text-gray-500 max-w-[120px]">
                {desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlant;
