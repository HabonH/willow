import EmojiList from "./EmojiList";
import Header from "./Header";
import AddJournal from "./Addjournal/AddJournal";
import Card from "../UI/Card";

import "./Dashboard.css";

const Dashboard = () => {
  const getJournalData = (data) => {
    console.log(data);
  };

  return (
    <div className='dashboard-container'>
      <Header />
      <EmojiList />
      <Card>
        <AddJournal getJournalData={getJournalData} />
      </Card>
    </div>
  );
};

export default Dashboard;
