import React, { useState, useEffect } from "react";
import "./Carousel.css";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import axios from "axios";

function Carousel() {
  const [index, setIndex] = useState(0);

  // Sets an image and affirmation as initial state for first render
  const [data, setData] = useState([
    { img: "./img1.jpeg", affirmations: "You have what it takes to succeed." },
  ]);

  // Gets images and affirmation from database for Carousel
  const URL = "http://localhost:3002/calming_images";
  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.rows);
    });
  }, []);

  // Click handler for left click
  const onLeftClick = () => {
    if (index > 0 && setIndex(index - 1)) {
    } else if (index === 0) {
      setIndex(data.length - 1);
    }
  };

  // Click handler for right click
  const onRightClick = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(${data[index].img})`,
        }}
      >
        <div className="left-carousel" onClick={() => onLeftClick()}>
          <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center-carousel">
          <h1 className="affirmation-text">{data[index].affirmations}</h1>
        </div>
        <div className="right-carousel" onClick={() => onRightClick()}>
          <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
