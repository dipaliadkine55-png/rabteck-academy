import React, { useState } from "react";

const initialTasks = [
  { id: 1, title: "Finish Capstone README", status: "Pending" },
  { id: 2, title: "Deploy SaaS Task Manager", status: "In Progress" },
  { id: 3, title: "Add Favicon", status: "Completed" },
];

const statuses = ["Pending", "In Progress", "Completed"];

export default function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 p-6">
      {statuses.map((status) => (
        <div key={status} className="bg-gray-100 rounded-lg p-4 shadow">
          <h2 className="text-lg font-bold mb-4">{status}</h2>
          <div className="space-y-3">
            {tasks
              .filter((task) => task.status ===