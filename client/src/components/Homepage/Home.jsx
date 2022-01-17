import "./Home.css";
import Button from "@mui/material/Button";

import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="hero">
        <div className="get-started-container">
          <h2 className="hero-title">Health & Wellness For Kids</h2>
        </div>
        <div className="happy-teen"></div>
      </div>
    </div>
  );
};

export default Home;
