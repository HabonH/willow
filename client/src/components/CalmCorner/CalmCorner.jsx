import Breathing from "./Breathing"
import "./CalmCorner.css";
import CalmSounds from "./CalmSounds";
import Carousel from "./Carousel"
import Card from "../UI/Card";


function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <div className="scrollable"> 
      <Breathing />
      <CalmSounds />
      <Card/>
      </div>

    </div>
  );
}

export default CalmCorner;