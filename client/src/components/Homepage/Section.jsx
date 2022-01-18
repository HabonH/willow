const Section = () => {
  return (
    <section className="app-info-section">
      <h1 className="app-info-title">Everything You Need</h1>
      <div className="mockup-container">
        <div className="iphone-mockup">
          {" "}
          <div className="info-bubbles-container"></div>
          <div className="info-bubble-right">
            <p>Dashboard with quick insights and insipiring words.</p>
          </div>
          <div className="spacer"></div>
          <div className="info-bubble-left">
            <p>Simple Navigation UI</p>
          </div>
          <div className="spacer"></div>
          <div className="info-bubble-right">
            <p>Emoji faces to discover and learn about emotions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
