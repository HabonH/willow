import { useState } from "react";
import Card from "../../UI/Card.jsx";
import "./AddJournal.css";
import Scale from "./Scale.jsx";

const AddJournal = () => {
  const [view, setView] = useState("add");
  const history = [];
  const addClickHandler = () => {
    history.push(view);
    setView("scale");
    console.log(history);
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
      {view === "scale" && <Scale />}
    </Card>
  );
};

export default AddJournal;
