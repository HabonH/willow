import axios from "axios";
import { useState, useEffect } from "react";

import EmojiList from "./EmojiList";
import Header from "./Header";
import AddJournal from "./Addjournal/AddJournal";
import headerQuotes from "./headerQuotes";
import Resources from "./Resources";

import "./Dashboard.css";

const Dashboard = () => {
  const [journalCount, setJournalCount] = useState(null);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const userID = localStorage.getItem("userID");

    const randomQuote =
      headerQuotes[Math.floor(Math.random() * headerQuotes.length)];
    setQuote(randomQuote);

    axios.get(`http://localhost:3002/journals-count/${userID}`).then((res) => {
      setJournalCount(res.data[0].count);
    });
  }, []);

  const getJournalData = (data) => {
    // will use this for updating count
    setJournalCount(Number(journalCount) + 1);
  };

  return (
    <div className="dashboard-container">
      <div className="journal-header">
        <AddJournal
          getJournalData={getJournalData}
          journalCount={journalCount}
        />
      </div>
      <Header journalCount={journalCount} quote={quote} />
      <EmojiList />
      <Resources />
      <div className="dashboard-spacer"></div>
    </div>
  );
};

export default Dashboard;
