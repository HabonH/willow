import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";

import Sidebar from "./Sidebar/Sidebar";
import Journal from "./Journal/Journal";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
    <div
      className='app-container'
      style={{ "background-color": "#E0ECF8", height: "100vh" }}
    >
      <h1>Main App</h1>
      {view === "home" && <Dashboard />}
      {view === "journal" && <Journal />}
      <Sidebar getView={getView} />
    </div>
  );
};

export default Main;
