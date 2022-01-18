import axios from "axios";
import { useState, useEffect } from "react";

import EmojiList from "./EmojiList";
import Header from "./Header";
import AddJournal from "./Addjournal/AddJournal";
import Card from "../UI/Card";

import "./Dashboard.css";

const Dashboard = () => {
  const [journalCount, setJournalCount] = useState(null);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    axios.get(`http://localhost:3002/journals-count/${userID}`).then((res) => {
      setJournalCount(res.data[0].count);
    });
  }, []);

  const getJournalData = (data) => {
    // will use this for updating count
    console.log(data);
  };

  return (
    <div className="dashboard-container">
      <Header journalCount={journalCount} />
      <EmojiList />
      <Card>
        <AddJournal getJournalData={getJournalData} />
      </Card>
    </div>
  );
};

export default Dashboard;
