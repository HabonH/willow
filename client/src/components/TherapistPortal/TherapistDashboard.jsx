import { useState, useEffect } from "react";
import axios from "axios";

import "./TherapistDashboard.css";

import TherapistNav from "./TherapistNav";
import Profile from "./Profile";
import StudentsList from "./StudentsList";

const TherapistDashboard = () => {
  const [view, setView] = useState("profile");
  const [therapist, setTherapist] = useState({});

  const getView = (view) => {
    setView(view);
  };

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`http://localhost:3002/therapists/profile/${userID}`)
      .then((res) => {
        setTherapist(res.data[0]);
      });
  }, []);

  return (
    <div className="therapist-dashboard-container">
      <div className="therapist-dashboard-left">
        <TherapistNav getView={getView} />
      </div>
      <div className="therapist-dashboard-right">
        {view === "profile" && <Profile therapist={therapist} />}
        {view === "students" && <StudentsList />}
      </div>
    </div>
  );
};

export default TherapistDashboard;
