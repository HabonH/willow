import EmojiList from "./EmojiList";
import Header from "./Header";
import AddJournal from "./Addjournal/AddJournal";
import Card from "../UI/Card";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <EmojiList />
      <Card>
        <AddJournal />
      </Card>
    </div>
  );
};

export default Dashboard;
