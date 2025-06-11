import React, { useState } from "react";
import CameraCapture from "../../components/landingPages/identyPlant/cameraCapture";
import DiseaseCard from "../../components/landingPages/identyPlant/diseaseCard";
import mockRecommendations from "../../services/recomendation";
import DashboardLayout from "../../layout/dashboard/layout";

const fetchData = async (imageFile) => {
  try {
    if (!imageFile) {
      return {
        status: "error",
        message: "File gambar tidak ditemukan",
      };
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      return {
        status: "success",
        message: data.message,
        disease: data.data.disease,
        confidence: data.data.confidenceScore,
      };
    } else {
      return {
        status: "error",
        message: data.message || "Terjadi kesalahan saat memproses gambar",
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: error.message || "Terjadi kesalahan pada server",
    };
  }
};

const MainIdentifyPlant = () => {
  const [showResult, setShowResult] = useState(false);
  const [identifiedCard, setIdentifiedCard] = useState(null);

  const handleIdentified = async (imageFile) => {
    const result = await fetchData(imageFile);
    setShowResult(true);
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : null;
    if (result.status === "success") {
      setIdentifiedCard({
        disease: result.disease || "Tidak terdeteksi",
        plant: result.plant || "-",
        symptoms: result.symptoms || "-",
        treatment: result.treatment || "-",
        confidence: result.confidence
          ? `${(result.confidence * 100).toFixed(2)}%`
          : "-",
        image: imageUrl,
      });
    } else {
      setIdentifiedCard({
        disease: "Tidak terdeteksi",
        plant: "-",
        symptoms: result.message || "Gagal memproses gambar",
        treatment: "-",
        confidence: "-",
        image: imageUrl,
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="w-auto rounded-4xl text-center relative z-20 mb-5 shadow-md bg-[#ffffff]">
        <div className="mx-5 md:mx-15 rounded-3xl text-left space-y-4 pt-15 sm:pt-15 md:pt-16 lg:pt-18">
          <div className="text-center space-y-4 mb-8">
            <span className="inline-block text-sm font-semibold tracking-wider text-white px-3 sm:px-4 rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis w-[160px] h-8 leading-8 text-center custom-banner">
              Plant Care
            </span>
            <h1 className="sm:text-2xl text-xl md:text-3xl font-bold font-nunito tracking-wider leading-tight steel-haze">
              Disease Plant Identification
            </h1>
            <p className="text-sm/6 md:text-sm/6 font-medium leading-normal tracking-wider max-w-sm mx-auto custome-deskription">
              Capture your plant's condition and receive instant diagnosis from
              our AI system
            </p>
          </div>

          <div>
            <CameraCapture onIdentified={handleIdentified} />
          </div>

          {/* Hasil Identifikasi */}
          {showResult && identifiedCard && (
            <div className="w-full max-w-5xl mx-auto mt-10 space-y-6">
              <div className="p-6 transform transition-all duration-300 hover:scale-[1.02]">
                <DiseaseCard
                  disease={identifiedCard.disease}
                  plant={identifiedCard.plant}
                  symptoms={identifiedCard.symptoms}
                  treatment={identifiedCard.treatment}
                  confidence={identifiedCard.confidence}
                  image={identifiedCard.image}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MainIdentifyPlant;
