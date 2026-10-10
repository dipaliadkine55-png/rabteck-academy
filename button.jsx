import React from "react";

export default function Button({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) {
  const baseStyles =
    "px-4 py-2 rounded font-semibold focus:outline-none focus:ring transition";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-100",
import Button from "./Button";

function DashboardActions() {
  return (
    <div className="space-x-4">
      <Button label="Add Task" onClick={() => alert("Task added")} />
      <Button
        label="Delete Task"
        variant="danger"
        onClick={() => alert("Task deleted")}
      />
      <Button
        label="Cancel"
        variant="secondary"
        onClick={() => alert("Cancelled")}
      />
    </div>
  );
}

export default DashboardActions;
