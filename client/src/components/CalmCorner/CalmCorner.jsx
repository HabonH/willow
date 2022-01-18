import React from "react";
import Carousel from "./Carousel";
import Breathing from "./Breathing"
import "./CalmCorner.css";

function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <div className="scrollable"> 
      <Breathing />
      </div>

    </div>
  );
}

export default CalmCorner;
