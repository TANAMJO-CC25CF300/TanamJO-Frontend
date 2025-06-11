import React from "react";

const formatDiseaseName = (disease) => {
  if (!disease) return "-";
  // Ubah underscore menjadi spasi dan kapitalisasi setiap kata
  return disease
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const DiseaseCard = ({
  disease,
  plant,
  symptoms,
  treatment,
  image,
  confidence,
}) => {
  // Penanganan khusus jika tanaman sehat
  const isHealthy = disease && disease.toLowerCase() === "healthy";

  return (
    <div className="w-full max-w-5xl flex p-6 items-center max-w-3xl mx-auto">
      {/* Image or Placeholder */}
      {image ? (
        <img
          src={image}
          alt="Plant"
          className="w-40 h-40 object-cover rounded-lg mr-6 flex-shrink-0"
        />
      ) : (
        <div className="w-20 h-20 mr-6 flex-shrink-0" />
      )}
      {/* Info */}
      <div className="flex-1">
        <div className="font-semibold">
          {isHealthy ? "Tanaman anda sehat!" : "Tanaman anda terkena penyakit:"}
        </div>
        <div className="flex items-center mt-1 mb-2">
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
      {/* Divider */}
      <div className="border-l h-20 mx-6" />
      {/* Details */}
      <div>
        <div className="font-semibold">Gejala</div>
        <div className="text-sm mb-2">{isHealthy ? "-" : symptoms}</div>
        <div className="font-semibold">Perawatan</div>
        <div className="text-sm">{isHealthy ? "-" : treatment}</div>
      </div>
    </div>
  );
};

export default DiseaseCard;
