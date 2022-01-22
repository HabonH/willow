import { useState, useEffect } from "react";
import axios from "axios";

import "./TherapistDashboard.css";

import TherapistNav from "./TherapistNav";
import Profile from "./Profile";
import StudentsList from "./StudentsList";

const TherapistDashboard = () => {
  const [view, setView] = useState("profile");

  const getView = (view) => {
    setView(view);
  };

  return (
    <div className="therapist-dashboard-container">
      <div className="therapist-dashboard-left">
        <TherapistNav getView={getView} />
      </div>
      <div className="therapist-dashboard-right">
        {view === "profile" && <Profile />}
        {view === "students" && <StudentsList />}
      </div>
    </div>
  );
};

export default TherapistDashboard;
