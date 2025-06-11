import React, { useState } from "react";
import LittleButton from "../LittleButton";
import NotHavePlant from "../../assets/MyPlant/notHavePlant.png";
import FormPlant from "./FormPlant";

const AddPlant = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[1300px] mx-auto mt-2 relative px-4 md:px-0">
      <div className="mb-4">
        <LittleButton onClick={() => setOpenModal(true)}>
          Add New Plant
        </LittleButton>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[800px] w-full bg-white p-4 md:p-12 shadow-md rounded-md">
          <img
            src={NotHavePlant}
            alt="Not Have Plant"
            className="w-48 md:w-72 h-48 md:h-72 object-contain mb-4 md:mb-8"
          />
          <p className="text-gray-500 text-center text-base md:text-lg font-medium px-4">
            You haven't planted your tomato plants yet
          </p>
          <FormPlant open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  );
};

export default AddPlant;
