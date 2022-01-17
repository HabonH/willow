import React from "react";
import "./Breathing.css";
import Card from "../UI/Card";

function Breathing() {
  return (
    <>
      <Card>
        <div className="instructions">
          <span>Breathing Exercise </span>
          <p>Inhale slowly through the nose as the circle expands,</p>
          <p> and breathe out through the mouth as it contracts. </p>
          <p>Repeat as much as you need, to feel calm.</p>
        </div>
        <div className="breathe-container">
          <div className="breathe"></div>
        </div>
      </Card>
    </>
  );
}

export default Breathing;
