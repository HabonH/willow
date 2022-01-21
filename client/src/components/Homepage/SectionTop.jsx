import dashboardMockup from "./assets/mockup-home.png";

const SectionTop = () => {
  return (
    <>
      <section className="app-info-section">
        <h1 className="app-info-title">Simple To Use</h1>
        <div className="mockup-container">
          <div className="iphone-mockup-top">
            {" "}
            <div className="info-section-list">
              <div className="info-section-item">
                <h2 className="info-card-title">
                  Dashboard Resources and Affirmations
                </h2>
                <p className="info-card-body">
                  The dashboard provides quick access to essential resources
                  such as crisis support lines. The quotes are a great way to
                  remind yourself of how important you are!
                </p>
              </div>
              <div className="info-section-item">
                <h2 className="info-card-title">Emoji Emotions</h2>
                <p className="info-card-body">
                  Emoji emotions is designed to teach kids about all the
                  different emotions they can experience. It also provides tips
                  on how to handle specific emotions.
                </p>
              </div>
              <div className="info-section-item">
                <h2 className="info-card-title">The Power of Journaling</h2>
                <p className="info-card-body">
                  Willow provides access to a journaling system with guided
                  prompts. Journaling has been proven, time and time again, to
                  be a useful mental health management tool.
                </p>
              </div>
            </div>
            <img src={dashboardMockup} className="mockup-img" />
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
