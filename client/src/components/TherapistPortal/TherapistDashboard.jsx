import { useState, useEffect } from "react";
import axios from "axios";

import "./TherapistDashboard.css";

import TherapistNav from "./TherapistNav";
import Profile from "./Profile";
import StudentsList from "./StudentsList";
import Card from "../UI/Card";

const TherapistDashboard = () => {
  const [view, setView] = useState("profile");
  const [therapist, setTherapist] = useState({});
  const [editData, setEditData] = useState({});

  const accessToken = localStorage.getItem("accessToken");

  const getView = (view) => {
    setView(view);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/therapists/profile", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setTherapist(res.data[0]);
        setEditData(res.data[0]);
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
        break;
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

  const save = () => {
    axios
      .put(
        "http://localhost:3002/therapists/profile",
        {
          editData,
        },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
    setTherapist(editData);
  };

  return (
    <div className="therapist-dashboard-container">
      <div className="therapist-dashboard-left">
        <TherapistNav getView={getView} />
      </div>

      {view === "profile" && (
        <div className="therapist-dashboard-right">
          <Card>
            <Profile
              therapist={therapist}
              getTherapistEditData={getTherapistEditData}
              save={save}
            />
          </Card>
        </div>
      )}
      {view === "students" && (
        <div className="therapist-dashboard-journal-right">
          {" "}
          <StudentsList />{" "}
        </div>
      )}
    </div>
  );
};

export default TherapistDashboard;
