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
        <li>
          <img
            src={require("./sidebar_icons/home.png")}
            onClick={homeHandler}
          />
        </li>
        <li>
          <img
            src={require("./sidebar_icons/journal.png")}
            onClick={journalHandler}
          />
        </li>
        <li>
          <img
            src={require("./sidebar_icons/calm.png")}
            onClick={calmHandler}
          />
        </li>
        <li>
          <img
            src={require("./sidebar_icons/therapist.png")}
            onClick={therapistHandler}
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
