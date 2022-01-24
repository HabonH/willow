import ShowJournalListItem from "./ShowJournalListItem";
import ShowJournal from "./ShowJournal";
import "../Journal/Journal.css";

import { useEffect, useState } from "react";
import axios from "axios";

const ShowJournalList = (props) => {
  const { student } = props;

  const [show, setShow] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const studentId = student[0].id;
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get(`http://localhost:3002/student_journals/${studentId}`, {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((result) => {
        setJournals(result.data);
      });
  }, []);

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
      <div className='card' key={journal.id}>
        <ShowJournalListItem
          key={journal.id}
          id={journal.id}
          title={journal.title}
          entry={journal.entry}
          date={journal.date}
          image={journal.choice}
          getJournal={getJournal}
        />
      </div>
    );
  });

  return (
    <>
      {show ? (
        <div>
          <ShowJournal journal={selectedJournal} exitShow={exitShow} />
          <div className='journal-holder'>{parsedJournals}</div>
        </div>
      ) : (
        <div className='journal-holder'>
          <div
            className='close-button'
            onClick={() => {
              return props.exitShow();
            }}
          ></div>
          {parsedJournals}
        </div>
      )}
    </>
  );
};

export default ShowJournalList;
