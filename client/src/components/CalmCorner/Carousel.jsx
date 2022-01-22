import React, { useState, useEffect } from "react";
import "./Carousel.css";
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import axios from "axios";

function Carousel() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    { img: "./img1.jpeg", affirmations: "You have what it takes to succeed." },
  ]);

  const URL = "http://localhost:3002/calming_images";
  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data.rows);
    });
  }, []);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(${data[index].img})`
        }}
      >
        <div
          className="left-carousel"
          onClick={() => {
            index > 0 && setIndex(index - 1);
          }}
        >
          <ArrowBackIosSharpIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center-carousel">
          <h1 className="affirmation-text">{data[index].affirmations}</h1>
        </div>
        <div
          className="right-carousel"
          onClick={() => {
            if (index === data.length - 1) {
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <ArrowForwardIosSharpIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
