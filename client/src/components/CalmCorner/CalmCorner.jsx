import React from "react";
import Carousel from "./Carousel";
import Breathing from "./Breathing"
import "./CalmCorner.css";
import CalmSounds from "./CalmSounds";

function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <Breathing />
      <CalmSounds />
    </div>
  );
}

export default CalmCorner;
