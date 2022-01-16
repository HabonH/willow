import JournalListItem from "./JournalListItem";

import { useEffect, useState } from "react";
import axios from "axios";

const JournalList = () => {
  const [journal, setJournal] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);

  useEffect(() => {
    let email = localStorage.getItem("user");
    axios.get(`http://localhost:3002/journals/user/${email}`).then((result) => {
      // setJournal(result.data);
      console.log(result);
    });
  }, []);

  return <div className=''> Title </div>;
};

export default JournalList;
