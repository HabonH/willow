import EmojiList from "./EmojiList";
import Header from "./Header";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <EmojiList />
    </div>
  );
};

export default Dashboard;
