import React from "react";
import "./Breathing.css";
import Card from "../UI/Card";
import "../UI/Card.css";
function Breathing() {
  
  return (
    <div>
      <Card>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_dvi6jfgw.json"
          background="transparent"
          speed="1"
          style="width: 300px; height: 300px;"
          hover
          loop
          controls
          autoplay
        ></lottie-player>
      </Card>
    </div>
  );
}

export default Breathing;
