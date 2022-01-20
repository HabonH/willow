const SectionTop = () => {
  return (
    <>
      <section className="app-info-section">
        <h1 className="app-info-title">Simple To Use</h1>
        <div className="mockup-container">
          <div className="iphone-mockup-top">
            {" "}
            <div className="info-bubbles-container">
              <div className="info-bubble-right">
                <p>Dashboard with quick insights and insipiring words.</p>
              </div>
              <div className="spacer"></div>
              <div className="info-bubble-left">
                <p>Journaling to promote and engage health tracking.</p>
              </div>
              <div className="spacer"></div>
              <div className="info-bubble-right">
                <p>Emoji faces to discover and learn about emotions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTop;
