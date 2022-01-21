import React, { useState } from "react";
import AudioPlayer from "material-ui-audio-player";
import PlayCircleOutlineSharpIcon from "@mui/icons-material/PlayCircleOutlineSharp";
import PauseCircleOutlineSharpIcon from "@mui/icons-material/PauseCircleOutlineSharp";
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
  { audio: FanNoise, label: "Fan", playing: false },
  { audio: Raindrops, label: "Raindrops", playing: false },
  { audio: CricketsAtNight, label: "Crickets", playing: false },
  { audio: WhiteNoise, label: "White", playing: false },
];

function CalmSounds() {
  const [sounds, setSounds] = useState([...audios]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const icons = {
    PlayIcon: PlayCircleOutlineSharpIcon,
    PauseIcon: PauseCircleOutlineSharpIcon,
  };
  const audioPlayers = sounds.map((sound, index) => {
    return (
      <div className="sounds-instructions" key={index}>
        {currentPlayer}
        <h4 className="title">{sound.label}</h4>
        <div className="audio-button">

        <AudioPlayer
        style={{color: "#525F76" }}
        key={index}
        id={index}
        icons={icons}
        width="100%"
        elevation={0}
        // variation="default"
        spacing={0}
        rounded={1}
        order="standart"
        preload="auto"
        loop={false}
        src={sound.audio}
        volume={false}
        displaySlider={false}
        />
        </div>
      </div>
    );
  });

  return (
    <div className="sound-card">
      <div className="instructions">
        <span>Calm Sounds</span>
        <div className="audio-list">{audioPlayers}</div>
      </div>
    </div>
  );
}

export default CalmSounds;
