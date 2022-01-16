import JournalListItem from "./JournalListItem";
// import Journalhow from "./JournalShow";
import "./Journal.css";

import { useEffect, useState } from "react";
import axios from "axios";

const JournalList = () => {
  const [journals, setJournals] = useState([]);
  console.log(journals);
  useEffect(() => {
    let email = localStorage.getItem("user");
    axios.get(`http://localhost:3002/journals/user/${email}`).then((result) => {
      setJournals(result.data);
    });
  }, []);

  // const getJournal = (id) => {
  //   const filteredJournal = journals.filter((entry) => entry.id === id);
  //   setSelectedJournal(filteredJournal);
  // };

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
        />
      </div>
    );
  });

  return (
    <>
      <div>{parsedJournals}</div>
    </>
  );
};

export default JournalList;
