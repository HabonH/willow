import { useState } from "react";
import Button from "@mui/material/Button";

const Scale = (props) => {
  const { back, getValue } = props;

  const [choiceMade, setChoiceMade] = useState(false);

  const [selected, setSelected] = useState("");

  return (
    <>
      <h3 className='scale-title'>How do you feel today?</h3>
      <img
        src={require("./icons/arrow.png")}
        className='back-arrow'
        onClick={back}
        alt='back button'
      />
      <div className='scale-container'>
        <label>
          <img
            alt='sad face'
            src={require("./icons/sad.png")}
            className={`scale-face sad ${
              selected === "label-sad" ? selected : null
            }`}
          />
          <input
            className='very sad radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              setSelected("label-sad");
              getValue(1);
            }}
          />
        </label>
        <label>
          <img
            alt='sad face'
            src={require("./icons/lil-sad.png")}
            className={`scale-face lil-sad ${
              selected === "label-lil-sad" ? selected : null
            }`}
          />
          <input
            className='lil-sad radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(2);
              setSelected("label-lil-sad");
            }}
          />
        </label>
        <label>
          <img
            alt='neutral face'
            src={require("./icons/neutral.png")}
            className={`scale-face neutral ${
              selected === "label-neutral" ? selected : null
            }`}
          />
          <input
            className='neutral radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(3);
              setSelected("label-neutral");
            }}
          />
        </label>
        <label>
          <img
            alt='happy face'
            src={require("./icons/lil-happy.png")}
            className={`scale-face lil-happy ${
              selected === "label-lil-happy" ? selected : null
            }`}
          />
          <input
            className='lil-happy radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(4);
              setSelected("label-lil-happy");
            }}
          />
        </label>
        <label>
          <img
            alt='very happy face'
            src={require("./icons/happy.png")}
            className={`scale-face happy ${
              selected === "label-happy" ? selected : null
            }`}
          />
          <input
            className='happy radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(5);
              setSelected("label-happy");
            }}
          />
        </label>
      </div>
      {choiceMade && (
        <div className='flex-container'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              props.getView();
            }}
          >
            Continue
          </Button>
        </div>
      )}
    </>
  );
};

export default Scale;
