import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { images } from "./CarouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";


function Carousel() {
  const URL = "http://localhost:3002/calming_images";
  const [currentIMG, setCurrentIMG] = useState(0);
  useEffect(() => {
    let email = localStorage.getItem("user");
    axios
    .get(URL)
    .then((result) => {

      console.log("Result --->", result);
    })

  }, [])

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

export default Carousel;
