import React, { useState } from "react";
import CameraCapture from "../../Components/CameraCapture";
import DiseaseCard from "../../components/DiseaseCard";
import HarvestLanding from "@components/landingPages/plantlis/HarvestLandingHome";

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
    <main className="min-h-screen pb-10 pattern-background">
      <HarvestLanding
        title="Identify Plant"
        breadcrumb={["Home", "Identify Plant"]}
      />
      <div className="lg:mx-0 xl:mx-10 pt-10 w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md pattern-background">
        <div className="mx-5 md:mx-15 rounded-3xl text-left space-y-4 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
          <h1 className="text-2xl font-bold text-center mb-6">
            Disease Plant Identification
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
    </main>
  );
};

export default IdentifyPlant;
