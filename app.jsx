import { useState } from "react";
import SetupPage from "./pages/SetupPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [setupComplete, setSetupComplete] = useState(
    !!localStorage.getItem("setup")
  );

  return setupComplete ? (
    <DashboardPage />
  ) : (
    <SetupPage onComplete={() => setSetupComplete(true)} />
  );
}

export default App;
