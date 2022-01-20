import Breathing from "./Breathing"
import "./CalmCorner.css";
import CalmSounds from "./CalmSounds";
import Carousel from "./Carousel"
import Coping from "./Coping";



function CalmCorner() {
  return (
    <div className="CalmCorner">
      <Carousel />
      <div className="scrollable"> 
      <Breathing />
      <CalmSounds />
      <Coping/>
      </div>

    </div>
  );
}

export default CalmCorner;