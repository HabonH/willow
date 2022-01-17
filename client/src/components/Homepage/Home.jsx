import "./Home.css";
import Theme from "../ThemeMUI/Theme";
import { ThemeProvider } from "@mui/material/styles";

import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home-container">
      <ThemeProvider theme={Theme}>
        <Nav />
      </ThemeProvider>
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
