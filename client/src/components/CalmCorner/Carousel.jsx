import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./carouselData";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

function Carousel() {
  const [currentIMG, setCurrentIMG] = useState(0);

  // Click handler for left click
  // Gets images and affirmation from carouselData.js for Carousel
  const onLeftClick = () => {
    if (currentIMG > 0 && setCurrentIMG(currentIMG - 1)) {
    } else if (currentIMG === 0) {
      setCurrentIMG(images.length - 1);
    }
  };

  // Click handler for right click
  const onRightClick = () => {
    if (currentIMG === images.length - 1) {
      setCurrentIMG(0);
    } else {
      setCurrentIMG(currentIMG + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(${images[currentIMG].img})`,
        }}
      >
        <div className="left-carousel" onClick={() => onLeftClick()}>
          <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center-carousel">
          <h1 className="affirmation-text">{images[currentIMG].affirmation}</h1>
        </div>
        <div className="right-carousel" onClick={() => onRightClick()}>
          <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
