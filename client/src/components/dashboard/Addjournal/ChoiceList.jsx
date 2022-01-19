import axios from "axios";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../../ThemeMUI/Theme";

import ChoiceItem from "./ChoiceItem";

const ChoiceList = (props) => {
  const [choiceData, setChoiceData] = useState([]);
  const [choiceMade, setChoiceMade] = useState(false);
  const [choiceName, setChoiceName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/choices").then((result) => {
      setChoiceData(result.data);
    });
  }, []);

  const getChoiceMade = () => {
    setChoiceMade(true);
  };
  const getChoice = (choice) => {
    setChoiceName(choice);
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
        selected={choiceName === choice.image}
      />
    );
  });

  return (
    <>
      <h3 className="choice-title">What made you feel that way?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow-dashboard"
        onClick={props.back}
        alt="back button"
      />
      <div className="choice-grid">{mappedChoices}</div>
      {choiceMade && (
        <ThemeProvider theme={Theme}>
          <div className="flex-container">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                props.getView();
              }}
            >
              Continue
            </Button>
          </div>
        </ThemeProvider>
      )}
    </>
  );
};

export default ChoiceList;
