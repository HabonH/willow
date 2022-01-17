import React, { useState } from "react";
import classNames from 'classnames';
import "./Breathing.css";


function Breathing() {
  const [ animation, setAnimation ] = useState(false)
  const breatheClass = classNames("unanimated", {"breathe": animation})

  return (
    <>
        <div id="breathe-card">
          <div className="instructions">
            <span>Breathing Exercise </span>
            <p>Inhale slowly through the nose as the circle expands,</p>
            <p> and breathe out through the mouth as it contracts. </p>
            <p>Repeat as much as you need, to feel calm.</p>
          </div>
          <div className="breathe-container">
            <div className={breatheClass}></div>
          </div>
          <button className="button" onClick={() => {setAnimation(true)}}>Play</button>
          <button className="button" onClick={() => {setAnimation(false)}}>Pause</button>
        </div>
    </>
  );
}

export default Breathing;
