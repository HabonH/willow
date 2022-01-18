import "./Home.css";

import { ThemeProvider } from "@mui/material/styles";

import Theme from "../ThemeMUI/Theme";
import Nav from "./Nav";
import Hero from "./Hero";
import Section from "./Section";

const Home = () => {
  return (
    <div className="home-container">
      <ThemeProvider theme={Theme}>
        <Nav />
        <Hero />
        <Section />
      </ThemeProvider>
    </div>
  );
};

export default Home;
