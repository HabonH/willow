import { useState } from "react";

import Card from "../../UI/Card.jsx";
import Scale from "./Scale.jsx";
import Choices from "./Choices.jsx";

import "./AddJournal.css";

const AddJournal = () => {
  const [view, setView] = useState("add");

  const [history, setHistory] = useState([]);

  const [data, setData] = useState({
    scale: null,
    choices: "",
    title: "",
    description: "",
  });

  const addClickHandler = () => {
    history.push(view);
    setView("scale");
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

  const getView = () => {
    setView("choices");
  };

  return (
    <Card>
      {view === "add" && (
        <>
          <h2 className="journal-title">Write in Your Journal</h2>
          <div className="plus">
            <button
              className="add-journal-button"
              onClick={addClickHandler}
            ></button>
          </div>
        </>
      )}
      {view === "scale" && (
        <Scale back={back} getValue={getValue} getView={getView} />
      )}
      {view === "choices" && <Choices />}
    </Card>
  );
};

export default AddJournal;
