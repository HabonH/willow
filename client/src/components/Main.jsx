import { useState } from "react";
import CalmCorner from "./CalmCorner/CalmCorner";
import Dashboard from "./dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import Journal from "./Journal/Journal";
import Therapist from "./Therapist/Therapist";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./ThemeMUI/Theme";

import "./Main.css";
const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
    <ThemeProvider theme={Theme}>
      <div className='app-container'>
        {view === "home" && <Dashboard />}
        {view === "calm" && <CalmCorner />}
        {view === "journal" && <Journal />}
        {view === "therapist" && <Therapist />}
        <Sidebar getView={getView} />
      </div>
    </ThemeProvider>
  );
};

export default Main;
