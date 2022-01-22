import { useState } from "react";
import CalmCorner from "./CalmCorner/CalmCorner";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import Journal from "./Journal/Journal";
import Therapist from "./Therapist/Therapist";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const getView = (view) => {
    setView(view);
  };
  return (
    <div className="app-container">
      {view === "home" && <Dashboard />}
      {view === "calm" && <CalmCorner />}
      {view === "journal" && <Journal />}
      {view === "therapist" && <Therapist />}
      <Sidebar getView={getView} />
    </div>
  );
};

export default Main;
