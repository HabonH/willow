import React, { useState } from "react";
import AudioPlayer from "material-ui-audio-player";
import Card from "../UI/Card";
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import PauseCircleOutlineSharpIcon from '@mui/icons-material/PauseCircleOutlineSharp';
import "./CalmSounds.css";
import "../UI/PlayPause.css";

import Waves from "./audio/Waves.mp3";
import WhiteNoise from "./audio/WhiteNoise.mp3";
import Campfire from "./audio/Campfire.mp3";
import FanNoise from "./audio/FanNoise.mp3";
import Raindrops from "./audio/Raindrops.mp3";
import CricketsAtNight from "./audio/CricketsAtNight.mp3";

const audios = [
  { audio: Waves, label: "Waves", playing: false },
  { audio: Campfire, label: "Campfire", playing: false },
  { audio: FanNoise, label: "Fan noise", playing: false },
  { audio: Raindrops, label: "Raindrops", playing: false },
  { audio: CricketsAtNight, label: "Cricket At Night", playing: false },
  { audio: WhiteNoise, label: "White Noise", playing: false },
];


{/* <ThemeProvider theme={muiTheme}> */}
function CalmSounds() {
  const [sounds, setSounds] = useState([...audios]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const icons = {
    PlayIcon: PlayCircleOutlineSharpIcon,
    PauseIcon: PauseCircleOutlineSharpIcon,
  
  }
  const audioPlayers = sounds.map((sound, index) => {
    return (
      <h5 className="instructions" key={index}>
        {currentPlayer}
        <h4>{sound.label}</h4>

        <AudioPlayer
          key={index}
          icons={icons}
          width="0"
          elevation={1}
          variation="default"
          spacing={0}
          rounded={1}
          order="standart"
          preload="auto"
          loop={false}
          src={sound.audio}
          volume={false}
          displaySlider={false}
        />

      </h5>
    );
  });

  return (
    
      <div className="sound-container">
        <div className="instructions">
          <span>Calm Sounds</span> </div>
        <div className="audio-list">{audioPlayers}</div>
      </div>
        
  );
}

export default CalmSounds;
