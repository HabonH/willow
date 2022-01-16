import { useState } from "react";
import CalmCorner from "./calm-corner/CalmCorner";
import Dashboard from "./dashboard/Dashboard";

import Sidebar from "./Sidebar/Sidebar";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
    <div
      className="app-container"
      style={{ "background-color": "#E0ECF8", height: "100vh" }}
    >
      
      {view === "home" && <Dashboard />}
      {view === "calm" && <CalmCorner />}
      <Sidebar getView={getView} />
    </div>
  );
};

export default Main;
