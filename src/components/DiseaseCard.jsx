import React from "react";

const DiseaseCard = ({ disease, plant, symptoms, treatment, image }) => (
  <div className="w-full max-w-5xl flex bg-white rounded-2xl shadow p-6 items-center max-w-3xl mx-auto">
    {/* Image or Placeholder */}
    {image ? (
      <img
        src={image}
        alt="Plant"
        className="w-40 h-40 object-cover rounded-lg mr-6 flex-shrink-0"
      />
    ) : (
      <div className="w-20 h-20 bg-gray-200 rounded-lg mr-6 flex-shrink-0" />
    )}
    {/* Info */}
    <div className="flex-1">
      <div className="font-semibold">Tanaman anda terkena penyakit:</div>
      <div className="flex items-center mt-1 mb-2">
        <span className="text-yellow-500 mr-2">⚠️</span>
        <span className="font-bold">{disease}</span>
      </div>
      <div className="text-gray-500 text-sm mb-2">{plant}</div>
    </div>
    {/* Divider */}
    <div className="border-l h-20 mx-6" />
    {/* Details */}
    <div>
      <div className="font-semibold">Gejala</div>
      <div className="text-sm mb-2">{symptoms}</div>
      <div className="font-semibold">Perawanan</div>
      <div className="text-sm">{treatment}</div>
    </div>
  </div>
);

export default DiseaseCard;
