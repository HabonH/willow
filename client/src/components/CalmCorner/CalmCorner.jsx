import Breathing from "./Breathing";
import "./CalmCorner.css";
import CalmSounds from "./CalmSounds";
import Carousel from "./Carousel";
import Coping from "./Coping";

// Collects all components under CalmCorner to be displayed in the front-end
function CalmCorner() {
  return (
    <div className="CalmCorner">
      <div className="scrollable">
        <Carousel />
        <Breathing />
        <CalmSounds />
        <Coping />
      </div>
    </div>
  );
}

export default CalmCorner;
