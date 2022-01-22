import "./Home.css";

import Nav from "./Nav";
import Hero from "./Hero";
import SectionTop from "./SectionTop";
import SectionMiddle from "./SectionMiddle";
import SectionBottom from "./SectionBottom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className='home-container'>
      <Nav />
      <Hero />
      <SectionTop />
      <SectionMiddle />
      <SectionBottom />
      <Footer />
    </div>
  );
};

export default Home;
