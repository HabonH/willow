const TherapistNav = (props) => {
  const { getView } = props;

  const profileHandler = () => {
    getView("profile");
  };

  const studentsHandler = () => {
    getView("students");
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
      </ul>
    </div>
  );
};

export default TherapistNav;
