import axios from "axios";

import { useEffect, useState } from "react";

import ChoiceItem from "./ChoiceItem";

const ChoiceList = (props) => {
  const [choiceData, setChoiceData] = useState([]);
  const [choiceMade, setChoiceMade] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3002/choices").then((result) => {
      setChoiceData(result.data);
    });
  }, []);

  const getChoiceMade = () => {
    setChoiceMade(true);
  };

  const getChoice = (choice) => {
    props.getChoiceData(choice);
  };
  const mappedChoices = choiceData.map((choice) => {
    return (
      <ChoiceItem
        key={choice.id}
        id={choice.id}
        name={choice.label}
        image={choice.image}
        getChoice={getChoice}
        getChoiceMade={getChoiceMade}
      />
    );
  });

  return (
    <>
      <h3 className="choice-title">What made you feel that way?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow"
        onClick={props.back}
      />
      <div className="choice-grid">{mappedChoices}</div>
      {choiceMade && (
        <button
          className="continue"
          onClick={() => {
            props.getView();
          }}
        >
          Continue
        </button>
      )}
    </>
  );
};

export default ChoiceList;
