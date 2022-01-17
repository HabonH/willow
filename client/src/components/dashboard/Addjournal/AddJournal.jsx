import { useState } from "react";
import axios from "axios";

import Scale from "./Scale.jsx";
import ChoiceList from "./ChoiceList.jsx";
import JournalText from "./JournalText.jsx";
import FinalView from "./FinalView.jsx";

import "./AddJournal.css";
import { useEffect } from "react";

const AddJournal = () => {
  const [view, setView] = useState("add");

  const [data, setData] = useState({
    scale: null,
    choice: "",
    title: "untitled",
    description: "",
  });

  const back = () => {
    if (view === "scale") {
      setView("add");
    } else if (view === "choices") {
      setView("scale");
    } else if (view === "journal") {
      setView("choices");
    }
  };

  const getValue = (value) => {
    setData((prev) => {
      return { ...prev, scale: value };
    });
  };

  const getView = () => {
    if (view === "add") {
      setView("scale");
    } else if (view === "scale") {
      setView("choices");
    } else if (view === "choices") {
      setView("journal");
    }
  };

  const getChoiceData = (choice) => {
    setData((prev) => {
      return { ...prev, choice: choice };
    });
  };

  const getTextData = (textObj) => {
    if (!textObj.title) {
      setData((prev) => {
        return { ...prev, description: textObj.textArea };
      });
    }
    const saveData = {
      ...data,
      title: textObj.title,
      description: textObj.textArea,
    };
    save(saveData);
  };

  const close = () => {
    setView("add");
  };

  const save = (data) => {
    const userID = localStorage.getItem("userID");
    console.log(userID);
    axios
      .post(`http://localhost:3002/journals/${userID}`, data)
      .catch((err) => console.log(err));
    setView("final");
  };

  return (
    <>
      {view === "add" && (
        <>
          <h2 className="journal-title-card">Write in Your Journal</h2>
          <div className="plus">
            <button className="add-journal-button" onClick={getView}></button>
          </div>
        </>
      )}
      {view === "scale" && (
        <Scale back={back} getValue={getValue} getView={getView} />
      )}
      {view === "choices" && (
        <ChoiceList
          getChoiceData={getChoiceData}
          getView={getView}
          back={back}
        />
      )}
      {view === "journal" && (
        <JournalText getTextData={getTextData} back={back} />
      )}
      {view === "final" && <FinalView close={close} />}
    </>
  );
};

export default AddJournal;
