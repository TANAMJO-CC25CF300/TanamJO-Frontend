// components/AgricultureCard.jsx
import { ArrowUpRight } from "lucide-react";

export default function AgricultureCard({ title, description }) {
  return (
    <div className="relative  border-gray-300 rounded-xl p-6 shadow hover:shadow-md transition duration-300">
      {/* Icon pojok kanan atas */}
      <div className="absolute top-4 right-4 bg-gray-300 hover:bg-[#5B8C51] text-white rounded-full p-2 transition-colors duration-200">
  <ArrowUpRight size={16} />
</div>


      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
