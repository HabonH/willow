import React from "react";
import Carousel from "./Carousel";
import Breathing from "./Breathing"
import "./CalmCorner.css";

function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <Breathing />
    </div>
  );
}

export default CalmCorner;
