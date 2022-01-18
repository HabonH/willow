import "./Home.css";

import { ThemeProvider } from "@mui/material/styles";

import Theme from "../ThemeMUI/Theme";
import Nav from "./Nav";
import Hero from "./Hero";
import SectionTop from "./SectionTop";

const Home = () => {
  return (
    <div className="home-container">
      <ThemeProvider theme={Theme}>
        <Nav />
        <Hero />
        <SectionTop />
      </ThemeProvider>
    </div>
  );
};

export default Home;
