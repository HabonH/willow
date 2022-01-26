import { useState } from "react";
import ConfirmLogout from "../Sidebar/ConfirmLogout";
import { useNavigate } from "react-router-dom";
import willowLogo from "../Homepage/assets/willow-logo.svg";

const TherapistNav = (props) => {
  const { getView } = props;

  const [logout, setLogout] = useState(false);
  const [selected, setSelected] = useState("profile");

  const navigate = useNavigate();

  const profileHandler = () => {
    getView("profile");
    setSelected("profile");
  };

  const studentsHandler = () => {
    getView("students");
    setSelected("students");
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
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userType");
    navigate("/");
  };

  return (
    <>
      {logout && (
        <ConfirmLogout
          getConfirmLogoutChoice={getConfirmLogoutChoice}
          className="therapist-confirm-logout"
        />
      )}
      <div className="therapist-nav-container">
        <ul className="therapist-nav-list">
          <img
            src={willowLogo}
            alt="willow logo"
            className="willow-logo-therapist"
          />
          <li
            className={`therapist-nav-item ${
              selected === "profile" ? "therapist-nav-item-selected" : null
            }`}
            onClick={profileHandler}
          >
            Profile
          </li>
          <li
            className={`therapist-nav-item ${
              selected === "students" ? "therapist-nav-item-selected" : null
            }`}
            onClick={studentsHandler}
          >
            Students
          </li>
          <li
            className={`therapist-nav-item logout-nav`}
            onClick={logoutHandler}
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default TherapistNav;
