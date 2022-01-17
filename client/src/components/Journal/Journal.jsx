import JournalList from "./JournalList";
import AddJournal from "./Addjournal/AddJournal";

import { useState } from "react";

const JournalListItem = (props) => {
  const [journalData, setJournalData] = useState({});

  const getJournalData = (data) => {
    setJournalData(data);
  };

  return (
    <div className='main-journal-container'>
      <div className='journal-header'>
        <AddJournal getJournalData={getJournalData} />
      </div>
      <JournalList journalData={journalData} />
    </div>
  );
};

export default JournalListItem;
