import React, { useState } from "react";
import "./Carousel.css";
import { images } from "./CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function CarouselIMG() {
  const [currentIMG, setCurrentIMG] = useState(0);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currentIMG].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentIMG > 0 && setCurrentIMG(currentIMG - 1);
          }}
        >
          <ArrowBackIosIcon style={{fontSize: 30}}/>
        </div>
        <div className="center">
          <h1>{images[currentIMG].affirmation}</h1>
        </div>

        <div className="right"  onClick={() => {
            currentIMG < images.length -1 && setCurrentIMG(currentIMG + 1);
          }}>
          <ArrowForwardIosIcon style={{fontSize: 30}} />
        </div>
      </div>
    </div>
  );
}

export default CarouselIMG;
