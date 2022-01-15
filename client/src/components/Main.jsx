import { useState } from "react";
import CalmCorner from "./calm-corner/CalmCorner";

import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
  const [view, setView] = useState("home");

  const user = localStorage.getItem("user");

  const getView = (view) => {
    setView(view);
  };
  return (
    <div>
      <h1>Main App</h1>
      <Sidebar getView={getView} />
      <CalmCorner />
    </div>
  );
};

export default Main;
