import React, { useState } from "react";
import Header from "../../Components/Header";
import CameraCapture from "../../Components/CameraCapture";
import bgPattern from "../../assets/background.png";
import DiseaseCard from "../../components/DiseaseCard";

const mockRecommendations = [
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint."',
];

const IdentifyPlant = () => {
  // State untuk menampilkan hasil identifikasi setelah upload/capture
  const [showResult, setShowResult] = useState(false);
  const [identifiedCard, setIdentifiedCard] = useState(null);

  // Fungsi ini nanti bisa dipanggil setelah identifikasi berhasil
  const handleIdentified = (image) => {
    setShowResult(true);
    setIdentifiedCard({
      disease: "Busuk Daun",
      plant: "Tomatitors",
      symptoms: "Daun Layu, Berkecoklatan",
      treatment: "Buang daun yang terinfeksi, semprot fungisida organik",
      image: image,
    });
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
        {showResult && identifiedCard && (
          <div className="w-full max-w-5xl mx-auto mt-10">
            <DiseaseCard
              disease={identifiedCard.disease}
              plant={identifiedCard.plant}
              symptoms={identifiedCard.symptoms}
              treatment={identifiedCard.treatment}
              image={identifiedCard.image}
            />
            {/* Teks dan rekomendasi tambahan */}
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
