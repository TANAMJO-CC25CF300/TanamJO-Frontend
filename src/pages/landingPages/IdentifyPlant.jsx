import React, { useState } from "react";
import Header from "../../components/Header";
import CameraCapture from "../../Components/CameraCapture";
import bgPattern from "../../assets/background.png";

const mockRecommendations = [
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
];

const IdentifyPlant = ({ title = "YOUR TOMATO IS" }) => {
  // State untuk menampilkan hasil identifikasi setelah upload/capture
  const [showResult, setShowResult] = useState(false);
  const [identifiedImage, setIdentifiedImage] = useState(null);

  // Fungsi ini nanti bisa dipanggil setelah identifikasi berhasil
  const handleIdentified = (imageData) => {
    setIdentifiedImage(imageData);
    setShowResult(true);
  };

  return (
    <div
      className="min-h-screen pb-10"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Identify your plant
        </h1>
        <CameraCapture onIdentified={handleIdentified} />
        {/* Hasil Identifikasi */}
        {showResult && identifiedImage && (
          <div className="w-full max-w-5xl mx-auto mt-10 bg-white bg-opacity-95 rounded-2xl shadow-lg p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <img
                src={identifiedImage}
                alt="Identified Plant"
                className="w-full max-w-xl rounded-t-2xl object-cover"
                style={{ maxHeight: 250 }}
              />
            </div>
            <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
            <div className="text-2xl font-bold text-center text-[#C62828] mt-6 mb-4">
              GOOOD!
            </div>
            <div className="flex flex-col gap-4 w-full">
              {mockRecommendations.map((rec, idx) => (
                <div
                  key={idx}
                  className="bg-[#5B8C51] text-white rounded-lg px-4 py-3 text-sm md:text-base shadow"
                >
                  {rec}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdentifyPlant;
