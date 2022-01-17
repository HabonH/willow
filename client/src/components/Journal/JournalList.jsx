import JournalListItem from "./JournalListItem";
import JournalShow from "./JournalShow";
import "./Journal.css";

import { useEffect, useState } from "react";
import axios from "axios";

const JournalList = (props) => {
  console.log(props.journalData);
  const { journalData } = props;

  const [show, setShow] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    let email = localStorage.getItem("user");
    axios.get(`http://localhost:3002/journals/user/${email}`).then((result) => {
      setJournals(result.data);
    });
  }, [journalData]);

  const getJournal = (id) => {
    const filteredJournal = journals.filter((entry) => entry.id === id);
    setSelectedJournal(filteredJournal);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };
  const parsedJournals = journals.map((journal) => {
    return (
      <div className='card'>
        <JournalListItem
          key={journal.id}
          id={journal.id}
          title={journal.title}
          entry={journal.entry}
          date={journal.date}
          scale={journal.scale}
          getJournal={getJournal}
        />
      </div>
    );
  });

  return (
    <>
      {show ? (
        <div>
          <JournalShow journal={selectedJournal} exitShow={exitShow} />
        </div>
      ) : (
        <div className='journal-holder'>{parsedJournals}</div>
      )}
    </>
  );
};

export default JournalList;
