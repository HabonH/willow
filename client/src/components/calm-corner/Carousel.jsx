import React, { useState, useEffect } from "react";
import "./Carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";

function Carousel() {
  const URL = "http://localhost:3002/calm-images";
  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.rows);
      console.log(response.data.rows);
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState(null);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${data[currentIndex].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentIndex > 0 && setCurrentIndex(currentIndex - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{data[currentIndex].affirmations}</h1>
        </div>
        <div
          className="right"
          onClick={() => {
            currentIndex < data.length - 1 && setCurrentIndex(currentIndex + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
