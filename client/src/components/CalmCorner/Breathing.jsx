import React, { useState } from "react";
import classNames from "classnames";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import "./Breathing.css";
import Card from "../UI/Card";

function Breathing() {
  const [animation, setAnimation] = useState(false);
  const breatheClass = classNames("unanimated", { breathe: animation });

  // Click handler to allow animation to play and pause with Material UI icons
  const onPlay = () => {
    if (animation === true) {
      setAnimation(false);
    } else {
      setAnimation(true);
    }
  };

  return (
    <>
      <Card className="breathe-card">
        <div className="instructions">
          <span>Breathing Exercise </span>
          <p>
            Inhale slowly through the nose as the circle expands, and breathe
            out through the mouth as it contracts. Repeat as much as you need,
            to feel calm.
          </p>
        </div>
        <div className="breathe-container">
          <div className={breatheClass}></div>
        </div>
        <div id="button">
          {animation === true ? (
            <PauseIcon
              style={{ color: "#525F76" }}
              className="button-play"
              onClick={onPlay}
            />
          ) : (
            <PlayArrowIcon
              style={{ color: "#525F76" }}
              className="button-pause"
              onClick={onPlay}
            />
          )}
        </div>
      </Card>
    </>
  );
}

export default Breathing;
