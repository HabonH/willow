import { useState, useEffect } from "react";
import axios from "axios";

import "./TherapistDashboard.css";

import TherapistNav from "./TherapistNav";
import Profile from "./Profile";
import StudentsList from "./StudentsList";

const TherapistDashboard = () => {
  const [view, setView] = useState("profile");
  const [therapist, setTherapist] = useState({});
  const [editData, setEditData] = useState(therapist);

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

  const getTherapistEditData = (type, data) => {
    switch (type) {
      case "desc":
        setEditData((prev) => {
          return { ...prev, description: data };
        });
        break;
      case "org":
        setEditData((prev) => {
          return { ...prev, organization_name: data };
        });
        break;
      case "title":
        setEditData((prev) => {
          return { ...prev, title: data };
        });
      case "email":
        setEditData((prev) => {
          return { ...prev, email: data };
        });
        break;
      case "phone":
        setEditData((prev) => {
          return { ...prev, phone: data };
        });
        break;
      case "image":
        setEditData((prev) => {
          return { ...prev, image: data };
        });
        break;
    }
  };

  const save = () => {};

  return (
    <div className="therapist-dashboard-container">
      <div className="therapist-dashboard-left">
        <TherapistNav getView={getView} />
      </div>
      <div className="therapist-dashboard-right">
        {view === "profile" && (
          <Profile
            therapist={therapist}
            getTherapistEditData={getTherapistEditData}
            save={save}
          />
        )}
        {view === "students" && <StudentsList />}
      </div>
    </div>
  );
};

export default TherapistDashboard;
