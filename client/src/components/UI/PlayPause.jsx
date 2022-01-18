import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import "./PlayPause.css";

function PlayPause() {
  const [animation, setAnimation] = useState(false);

  const handlePlay = () => {
    if (animation === false) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };

  return (
    <>
          <div className="button-container">
            {animation === true ? (
              <button className="button play" onClick={handlePlay}>
                <PauseIcon />
              </button>
            ) : (
              <button className="button pause" onClick={handlePlay}>
                <PlayArrowIcon />
              </button>
            )}
          </div>
  
    </>
  );
}

export default PlayPause;
