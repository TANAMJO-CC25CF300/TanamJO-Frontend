import React, { useState } from "react";
import LittleButton from "../LittleButton";
import NotHavePlant from "../../assets/MyPlant/NotHavePlant.png";
import FormPlant from "./FormPlant";

const AddPlant = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto mt-2 relative">
      <div className="mb-4">
        <LittleButton onClick={() => setOpenModal(true)}>
          Add New Plant
        </LittleButton>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col items-center justify-center min-h-[800px] w-[1106px] bg-white p-12 shadow-md rounded-md">
          <img
            src={NotHavePlant}
            alt="Not Have Plant"
            className="w-72 h-72 object-contain mb-8"
          />
          <p className="text-gray-500 text-center text-lg font-medium">
            You haven't planted your tomato plants yet
          </p>
          <FormPlant open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  );
};

export default AddPlant;
