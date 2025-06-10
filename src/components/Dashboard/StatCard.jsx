import React from "react";

// eslint-disable-next-line no-unused-vars
export default function StatCard({ title, value, icon: Icon, trend }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-xl">
          <Icon size={24} className="text-blue-600" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend.type === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-1">{value}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
} 