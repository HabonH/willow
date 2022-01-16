import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import breathing from "./lotties/lf20_dvi6jfgw.json";
import "./Breathing.css";

function Breathing() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: breathing,
    });
  }, []);

  return (
    <div>
      <div id="container" ref={container}> hELLO</div>
    </div>
  );
}

export default Breathing;
