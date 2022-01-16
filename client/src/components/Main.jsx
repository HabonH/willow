import { useState } from "react";
import Dashboard from "./dashboard/Dashboard";

import Sidebar from "./Sidebar/Sidebar";
import JournalList from "./Journal/JournalList";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
    <div className='app-container'>
      <h1>Main App</h1>
      {view === "home" && <Dashboard />}
      {view === "journal" && <JournalList />}
      <Sidebar getView={getView} />
    </div>
  );
};

export default Main;
