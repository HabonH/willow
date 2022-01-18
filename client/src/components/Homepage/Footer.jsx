import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <h1 className="footer-title">Ready to start bettering yourself?</h1>
        <p className="footer-text">Get started by registering below.</p>
        <Button
          variant="contained"
          color="neutral"
          className="learn-more-button"
        >
          Sign Up!
        </Button>
      </div>
    </div>
  );
};

export default Footer;
