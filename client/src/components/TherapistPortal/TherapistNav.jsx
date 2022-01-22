const TherapistNav = (props) => {
  const { getView } = props;

  const profileHandler = () => {
    getView("profile");
  };

  const studentsHandler = () => {
    getView("students");
  };

  const logoutHandler = () => {
    console.log("this will logout eventually");
  };

  return (
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
  );
};

export default TherapistNav;
