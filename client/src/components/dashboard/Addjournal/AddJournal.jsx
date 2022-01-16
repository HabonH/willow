import { useState } from "react";
import Card from "../../UI/Card.jsx";
import "./AddJournal.css";
import Scale from "./Scale.jsx";

const AddJournal = () => {
  const [view, setView] = useState("add");

  const [history, setHistory] = useState([]);

  const [data, setData] = useState({
    scale: null,
    choices: [],
    title: "",
    description: "",
  });

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
    setView(history.slice(-1)[0]);
  };

  const getValue = (value) => {
    setData((prev) => {
      return { ...prev, scale: value };
    });
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
      {view === "scale" && <Scale back={back} getValue={getValue} />}
    </Card>
  );
};

export default AddJournal;
