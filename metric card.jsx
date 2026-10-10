import React from "react";

export default function MetricCard({ title, value, icon, color }) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${color}`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
