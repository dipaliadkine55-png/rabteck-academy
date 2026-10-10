import React from "react";

/**
 * Task Model Component
 * Represents a single task card with title, description, status, and actions.
 */
export default function Model({ task, onEdit, onDelete }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
            task.status === "Completed"
              ? "bg-green-100 text-green-700"
              : task.status === "In Progress"
              ?