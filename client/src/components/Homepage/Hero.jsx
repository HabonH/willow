import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-left-column">
        <h2 className="hero-title">
          Health & <br /> Wellness <br />
          For Kids{" "}
        </h2>
        <p className="hero-description">
          A webapp designed to teach kids <br /> emotional stability.
        </p>
        <div className="hero-button-container">
          <Stack spacing={3} direction="row">
            <Button
              variant="contained"
              color="secondary"
              className="get-started-button"
            >
              {" "}
              Get Started{" "}
            </Button>

            <Button
              variant="contained"
              color="neutral"
              className="learn-more-button"
            >
              {" "}
              Learn More{" "}
            </Button>
          </Stack>
        </div>
      </section>
      <section className="hero-right-column">
        <div className="happy-teen"></div>
      </section>
    </div>
  );
};

export default Hero;
