import { useState } from "react";
import Card from "../../UI/Card.jsx";
import "./AddJournal.css";
import Scale from "./Scale.jsx";

const AddJournal = () => {
  const [view, setView] = useState("add");
  const [history, setHistory] = useState([]);

  const addClickHandler = () => {
    history.push(view);
    setView("scale");
    console.log(history);
  };

  const back = () => {
    setHistory((prev) => {
      prev.pop();
      return [...prev];
    });
    console.log(history);
    setView(history.slice(-1)[0]);
  };

  return (
    <Card>
      {view === "add" && (
        <>
          <h2 className="journal-title">Write in Your Journal</h2>
          <button className="add-journal-button" onClick={addClickHandler}>
            +
          </button>
        </>
      )}
      {view === "scale" && <Scale back={back} />}
    </Card>
  );
};

export default AddJournal;
