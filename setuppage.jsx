import React, { useState } from "react";
import Button from "../components/Button";

export default function SetupPage({ onComplete }) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save setup data (could be persisted in localStorage or backend)
    const setupData = { workspaceName, teamSize };
    localStorage.setItem("setup", JSON.stringify(setupData));

    // Call parent handler to move to dashboard
    if (onComplete) onComplete(setupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Setup Your Workspace
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Workspace Name
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="e.g. Marketing Team"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Team Size
            </label>
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="e.g. 5"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <Button type="submit" label="Continue" variant="primary" />
        </form>
      </div>
    </div>
  );
}
