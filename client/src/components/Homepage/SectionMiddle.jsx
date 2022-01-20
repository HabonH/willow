const SectionMiddle = () => {
  return (
    <>
      <section className="app-info-section-middle">
        <h1 className="app-info-title">Tools and Resources</h1>
        <div className="mockup-container">
          <div className="iphone-mockup-middle">
            <div className="info-section-list">
              <div className="info-section-item-middle">
                <h2 className="info-card-title">Calm Corner</h2>
                <p className="info-card-body">
                  Willow provides a safe space to go with a set of tools to help
                  manage mood and emotions
                </p>
              </div>
              <div className="info-section-item-middle">
                <h2 className="info-card-title">Breathing Exercise</h2>
                <p className="info-card-body">
                  Controlled breathing is an excellent tool against emotion
                  management and Willow provides an interactive and guided tool
                  to practice good breathing.
                </p>
              </div>
              <div className="info-section-item-middle">
                <h2 className="info-card-title">Calming Sounds</h2>
                <p className="info-card-body">
                  Gain access to a set of calming sounds to help you fall asleep
                  at night or to help soothe the soul.
                </p>
              </div>
            </div>
            <div className="info-bubbles-container"></div>
            <div className="info-bubble-right">
              <p>Calming Space for when emotions are high.</p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left-middle">
              <p>Calming Sounds to help soothe the soul</p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left-middle2">
              <p>One-click Breathing Exercise </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMiddle;
