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
      <h1>Main App</h1>
      {view === "home" && <Dashboard />}
      <Sidebar getView={getView} />
      <CalmCorner />
    </div>
  );
};

export default Main;
