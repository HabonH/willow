import { useState } from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../../ThemeMUI/Theme";

const Scale = (props) => {
  const { back, getValue } = props;

  const [choiceMade, setChoiceMade] = useState(false);

  const [selected, setSelected] = useState("");

  return (
    <>
      <h3 className="scale-title">How do you feel today?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow-dashboard"
        onClick={back}
        alt="back button"
      />
      <div className="scale-container">
        <label className={selected === "label-sad" ? selected : null}>
          <img
            alt="sad face"
            src={require("./icons/sad.png")}
            className="scale-face"
          />
          <input
            className="very sad radio"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              setSelected("label-sad");
              getValue(1);
            }}
          />
        </label>
        <label className={selected === "label-lil-sad" ? selected : null}>
          <img
            alt="sad face"
            src={require("./icons/lil-sad.png")}
            className="scale-face"
          />
          <input
            className="lil-sad radio"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(2);
              setSelected("label-lil-sad");
            }}
          />
        </label>
        <label className={selected === "label-neutral" ? selected : null}>
          <img
            alt="neutral face"
            src={require("./icons/neutral.png")}
            className="scale-face"
          />
          <input
            className="neutral radio"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(3);
              setSelected("label-neutral");
            }}
          />
        </label>
        <label className={selected === "label-lil-happy" ? selected : null}>
          <img
            alt="happy face"
            src={require("./icons/lil-happy.png")}
            className="scale-face"
          />
          <input
            className="lil-happy radio"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(4);
              setSelected("label-lil-happy");
            }}
          />
        </label>
        <label className={selected === "label-happy" ? selected : null}>
          <img
            alt="very happy face"
            src={require("./icons/happy.png")}
            className="scale-face"
          />
          <input
            className="happy radio"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(5);
              setSelected("label-happy");
            }}
          />
        </label>
      </div>
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

export default Scale;
