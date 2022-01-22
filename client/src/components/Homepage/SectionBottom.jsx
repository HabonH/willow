import dashboardMockup from "./assets/mockup-home.png";

const SectionBottom = () => {
  return (
    <>
      <section className="app-info-section-bottom">
        <h1 className="app-info-title">Access to Professional Care</h1>
        <div className="mockup-container">
          <div className="iphone-mockup-bottom">
            <div className="info-section-list">
              <div className="info-section-item">
                <h2 className="info-card-title">
                  Local & Remote Professionals
                </h2>
                <p className="info-card-body">
                  Find information about local and remote professionals and pick
                  the right person for you!
                </p>
              </div>
              <div className="info-section-item">
                <h2 className="info-card-title">Direct Booking</h2>
                <p className="info-card-body">
                  Once you've picked the right person, Willow provides access to
                  that professional's calendar, where you can book an
                  appointment that suits your schedule.
                </p>
              </div>
              <div className="info-section-item">
                <p className="coming-soon"> Coming Soon!</p>
                <h2 className="info-card-title">Chat</h2>
                <p className="info-card-body">
                  You will be able to chat with therapists and gain quick access
                  to support right inside the Willow app!
                </p>
              </div>
            </div>

            <div className="info-bubbles-container"></div>
            <div className="info-bubble-right">
              <p>Gain access to local professionals in your area.</p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left-bottom">
              <p>
                Access Therapist calendars <br />
                directly in our app.
              </p>
            </div>
            <div className="spacer"></div>
            <div className="info-bubble-left-bottom2">
              <p>Find the right professional for you.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBottom;
