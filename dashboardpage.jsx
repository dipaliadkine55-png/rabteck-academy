import React from "react";
import { useAuth } from "../context/AuthContext";
import DashboardMetrics from "../components/DashboardMetrics";
import TaskBoard from "../components/TaskBoard";
import Button from "../components/Button";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Welcome, {user?.email}</span>
          <Button label="Logout" variant="danger" onClick={logout} />
        </div>
