import { useState } from "react";
import ConfirmLogout from "../Sidebar/ConfirmLogout";
import { useNavigate } from "react-router-dom";

const TherapistNav = (props) => {
  const { getView } = props;

  const [logout, setLogout] = useState(false);

  const navigate = useNavigate();

  const profileHandler = () => {
    getView("profile");
  };

  const studentsHandler = () => {
    getView("students");
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
      <div className="therapist-nav-container">
        <ul className="therapist-nav-list">
          <li className="therapist-nav-item" onClick={profileHandler}>
            Profile
          </li>
          <li className="therapist-nav-item" onClick={studentsHandler}>
            Students
          </li>
          <li className="therapist-nav-item logout-nav" onClick={logoutHandler}>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default TherapistNav;
