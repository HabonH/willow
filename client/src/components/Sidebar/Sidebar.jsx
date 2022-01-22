import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import willowLogo from "../Homepage/assets/willow-logo.svg";
import ConfirmLogout from "./ConfirmLogout";

import "./Sidebar.css";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("home");
  const [logout, setLogout] = useState(false);

  const sidebarNameClass = "sidebar-icon-name";

  const homeHandler = () => {
    props.getView("home");
    setSelected("home");
  };

  const journalHandler = () => {
    props.getView("journal");
    setSelected("journal");
  };

  const calmHandler = () => {
    props.getView("calm");
    setSelected("calm");
  };

  const therapistHandler = () => {
    props.getView("therapist");
    setSelected("therapist");
  };

  const logoutHandler = () => {
    setLogout(true);
  };

  const getConfirmLogoutChoice = (choice) => {
    if (!choice) {
      return setLogout(false);
    }
    confirmLogoutHandler();
  };

  const confirmLogoutHandler = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <>
      {logout && (
        <ConfirmLogout getConfirmLogoutChoice={getConfirmLogoutChoice} />
      )}
      <div className="sidebar-container">
        <div className="sidebar-header">
          <img
            src={willowLogo}
            alt="willow logo"
            className="willow-logo-sidebar"
          />
        </div>
        <ul className="sidebar-icons">
          <div
            className={`${sidebarNameClass} ${
              selected === "home" ? "home-selected" : null
            }`}
            onClick={homeHandler}
          >
            {" "}
            <li
              onClick={homeHandler}
              className={`sidebar-icon-1 sidebar-item ${
                selected === "home" ? "home-icon-selected" : null
              }`}
            >
              <img
                className="icon-image"
                alt="home button"
                src={require("./sidebar_icons/home.png")}
              />
            </li>
            <h1 className="sidebar-icon-label">Home</h1>
          </div>
          <div
            className={`${sidebarNameClass} ${
              selected === "journal" ? "journal-selected" : null
            }`}
            onClick={journalHandler}
          >
            <li
              onClick={journalHandler}
              className={`sidebar-icon-2 sidebar-item ${
                selected === "journal" ? "journal-icon-selected" : null
              }`}
            >
              <img
                className="icon-image"
                alt="journals button"
                src={require("./sidebar_icons/journal.png")}
              />
            </li>
            <h1 className="sidebar-icon-label">Journals</h1>
          </div>
          <div
            className={`${sidebarNameClass}  ${
              selected === "calm" ? "calm-selected" : null
            }`}
            onClick={calmHandler}
          >
            <li
              onClick={calmHandler}
              className={`sidebar-icon-3 sidebar-item ${
                selected === "calm" ? "calm-icon-selected" : null
              }`}
            >
              <img
                className="icon-image"
                alt="calm corner button"
                src={require("./sidebar_icons/calm.png")}
              />
            </li>
            <h1 className="sidebar-icon-label">Calm Corner</h1>
          </div>
          <div
            className={`${sidebarNameClass} ${
              selected === "therapist" ? "therapist-selected" : null
            }`}
            onClick={therapistHandler}
          >
            <li
              onClick={therapistHandler}
              className={`sidebar-icon-4 sidebar-item ${
                selected === "therapist" ? "therapist-icon-selected" : null
              }`}
            >
              <img
                className="icon-image"
                alt="therapists button"
                src={require("./sidebar_icons/therapist.png")}
              />
            </li>
            <h1 className="sidebar-icon-label">Therapists</h1>
          </div>
          <div className={`${sidebarNameClass}`} onClick={logoutHandler}>
            <li onClick={logoutHandler} className="sidebar-icon-5 sidebar-item">
              <img
                className="icon-image logout-button"
                alt="logout button"
                src={require("./sidebar_icons/logout.png")}
              />
            </li>
            <h1 className="sidebar-icon-label">Logout</h1>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
