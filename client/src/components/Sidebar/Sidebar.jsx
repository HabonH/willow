import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-icons">
        <li>
          <img src={require("./sidebar_icons/home.png")} />
        </li>
        <li>
          <img src={require("./sidebar_icons/journal.png")} />
        </li>
        <li>
          <img src={require("./sidebar_icons/calm.png")} />
        </li>
        <li>
          <img src={require("./sidebar_icons/therapist.png")} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
