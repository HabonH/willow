import { useState } from "react";
import CalmCorner from "./calm-corner/CalmCorner";
import Dashboard from "./dashboard/Dashboard";

import Sidebar from "./Sidebar/Sidebar";
import Journal from "./Journal/Journal";
import Therapist from "./Therapist/Therapist";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
<<<<<<< HEAD
    <div
      className="app-container"
      style={{ "background-color": "#E0ECF8", height: "100vh" }}
    >
=======
    <div className="app-container">
      <h1>Main App</h1>
>>>>>>> 5fcd24c63774574d969d2fb383ec11fd6be211e0
      {view === "home" && <Dashboard />}
      {view === "calm" && <CalmCorner />}
      {view === "journal" && <Journal />}
      {view === "therapist" && <Therapist />}
      <Sidebar getView={getView} />
    </div>
  );
};

export default Main;
