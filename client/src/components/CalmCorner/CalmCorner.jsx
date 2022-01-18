import React from "react";
import Carousel from "./Carousel";
import Breathing from "./Breathing"
import "./CalmCorner.css";
import CalmSounds from "./CalmSounds";

function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <div className="scrollable"> 
      <Breathing />
      <CalmSounds />
      </div>

    </div>
  );
}

export default CalmCorner;
