import { useState } from "react";

const Scale = (props) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const { back, getValue } = props;
  return (
    <>
      <h3 className="scale-title">How do you feel today?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow"
        onClick={back}
      />
      <div className="scale-container">
        <label>
          <img src={require("./icons/sad.png")} className="scale-face" />
          <input
            className="sad"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(1);
            }}
          />
        </label>
        <label>
          <img src={require("./icons/lil-sad.png")} className="scale-face" />
          <input
            className="lil-sad"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(2);
            }}
          />
        </label>
        <label>
          <img src={require("./icons/neutral.png")} className="scale-face" />
          <input
            className="neutral"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(3);
            }}
          />
        </label>
        <label>
          <img src={require("./icons/lil-happy.png")} className="scale-face" />
          <input
            className="lil-happy"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(4);
            }}
          />
        </label>
        <label>
          <img src={require("./icons/happy.png")} className="scale-face" />
          <input
            className="happy"
            type="radio"
            name="scale-choice"
            onClick={() => {
              setChoiceMade(true);
              getValue(5);
            }}
          />
        </label>
      </div>
      {choiceMade && <button>Continue</button>}
    </>
  );
};

export default Scale;
