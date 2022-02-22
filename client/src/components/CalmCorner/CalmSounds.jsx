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

// Audios listed for component
const audios = [
  { audio: Waves, title: "Waves", playing: false },
  { audio: Campfire, title: "Campfire", playing: false },
  { audio: FanNoise, title: "Fan", playing: false },
  { audio: Raindrops, title: "Raindrops", playing: false },
  { audio: CricketsAtNight, title: "Crickets", playing: false },
  { audio: WhiteNoise, title: "White", playing: false },
];

function CalmSounds() {
  const [sounds, setSounds] = useState([...audios]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const icons = {
    PlayIcon: PlayCircleOutlineSharpIcon,
    PauseIcon: PauseCircleOutlineSharpIcon,
  };

  // Maps through audios with pseudo name sound and retrieves index
  // Returns each audio with their respective titles and displays currentPlayer
  // Returns Material UI Audio Player component with mapped audios

  const audioPlayers = sounds.map((sound, index) => {
    return (
      <div className="sounds-instructions" key={index}>
        <div id={index} className="title">
          {sound.title}
          {currentPlayer}
        </div>
        <div className="audio-button">
          <AudioPlayer
            style={{ color: "#525F76" }}
            key={index}
            id={index}
            icons={icons}
            width="100%"
            elevation={0}
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

  // Displays on the front-end each audio and title which are now interactive
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
