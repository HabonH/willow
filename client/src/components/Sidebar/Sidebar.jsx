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
        <li onClick={homeHandler}>
          <img src={require("./sidebar_icons/home.png")} />
        </li>
        <li onClick={journalHandler}>
          <img src={require("./sidebar_icons/journal.png")} />
        </li>
        <li onClick={calmHandler}>
          <img src={require("./sidebar_icons/calm.png")} />
        </li>
        <li onClick={therapistHandler}>
          <img src={require("./sidebar_icons/therapist.png")} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
