import React from "react";

const formatDiseaseName = (disease) => {
  if (!disease) return "-";
  // Ubah underscore menjadi spasi dan kapitalisasi setiap kata
  return disease
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const DiseaseCard = ({ disease, plant, image, confidence }) => {
  // Penanganan khusus jika tanaman sehat
  const isHealthy = disease && disease.toLowerCase() === "healthy";

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row p-4 md:p-6 items-center bg-white rounded-lg shadow-md">
      {/* Image or Placeholder */}
      {image ? (
        <img
          src={image}
          alt="Plant"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-6 flex-shrink-0"
        />
      ) : (
        <div className="w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 flex-shrink-0" />
      )}
      {/* Info */}
      <div className="flex-1 text-center md:text-left">
        <div className="font-semibold">
          {isHealthy ? "Tanaman anda sehat!" : "Tanaman anda terkena penyakit:"}
        </div>
        <div className="flex items-center justify-center md:justify-start mt-1 mb-2">
          <span
            className={
              isHealthy ? "text-green-500 mr-2" : "text-yellow-500 mr-2"
            }
          >
            {isHealthy ? "✅" : "⚠️"}
          </span>
          <span className="font-bold">{formatDiseaseName(disease)}</span>
        </div>
        <div className="text-gray-500 text-sm mb-2">{plant}</div>
        {confidence && (
          <div className="text-xs text-green-700 mb-2">
            Tingkat keyakinan: {confidence}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseCard;
