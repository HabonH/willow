import "./Sidebar.css";

const Sidebar = (props) => {
  const homeHandler = () => {
    props.getView("home");
  };

  const journalHandler = () => {
    props.getView("journal");
  };

  const calmHandler = () => {
    props.getView("calm");
  };

  const therapistHandler = () => {
    props.getView("therapist");
  };
  return (
    <div className="sidebar-container">
      <ul className="sidebar-icons">
        <li onClick={homeHandler} className="sidebar-icon-1">
          <img alt="home button" src={require("./sidebar_icons/home.png")} />
        </li>
        <li onClick={journalHandler} className="sidebar-icon-2">
          <img
            alt="journals button"
            src={require("./sidebar_icons/journal.png")}
          />
        </li>
        <li onClick={calmHandler} className="sidebar-icon-3">
          <img
            alt="calm corner button"
            src={require("./sidebar_icons/calm.png")}
          />
        </li>
        <li onClick={therapistHandler} className="sidebar-icon-4">
          <img
            alt="therapists button"
            src={require("./sidebar_icons/therapist.png")}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
