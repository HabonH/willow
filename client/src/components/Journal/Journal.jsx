import JournalList from "./JournalList";
import AddJournal from "./Addjournal/AddJournal";

import axios from "axios";

import { useState, useEffect } from "react";

const JournalListItem = (props) => {
  const [journalData, setJournalData] = useState({});
  const [journalCount, setJournalCount] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    axios
      .get("http://localhost:3002/journals-count", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setJournalCount(res.data[0].count);
      });
  }, []);

  const getJournalData = (data) => {
    setJournalData(data);
    setJournalCount(Number(journalCount) + 1);
  };

  return (
    <div className='main-journal-container'>
      <div className='journal-header'>
        <AddJournal
          getJournalData={getJournalData}
          journalCount={journalCount}
        />
      </div>
      <JournalList journalData={journalData} />
    </div>
  );
};

export default JournalListItem;
