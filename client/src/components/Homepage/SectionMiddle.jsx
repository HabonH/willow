const SectionMiddle = () => {
  return (
    <>
      <section className="app-info-section-middle">
        <h1 className="app-info-title">In One Place</h1>
        <div className="mockup-container">
          <div className="iphone-mockup">
            {" "}
            <div className="info-bubbles-container"></div>
            <div className="info-bubble-right">
              <p>Calming Space for when emotions are high.</p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left-middle">
              <p>Calming Sounds to help soothe the soul</p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left">
              <p>One-click Breathing Exercise </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMiddle;
