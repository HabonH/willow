const Section = () => {
  return (
    <section className="app-info-section">
      <h1 className="app-info-title">Everything You Need</h1>
      <div className="mockup-container">
        <img
          src={require("./assets/iphone-mockup.png")}
          className="iphone-mockup"
        />
        <div className="info-bubbles-container">
          <div className="info-bubble-right">
            <p>Testing an info bubble</p>
          </div>
          <div className="spacer"></div>
          <div className="info-bubble-left">
            <p>Testing another info bubble</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
