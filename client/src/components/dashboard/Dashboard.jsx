import EmojiList from "./EmojiList";
import Header from "./Header";
import AddJournal from "./AddJournal";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <EmojiList />
      <AddJournal />
    </div>
  );
};

export default Dashboard;
