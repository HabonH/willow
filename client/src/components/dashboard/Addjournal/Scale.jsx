const Scale = (props) => {
  const { back } = props;
  return (
    <>
      <h3 className="scale-title">How do you feel today?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow"
        onClick={back}
      />
      <div className="scale-container">
        <label>
          <img src={require("./icons/sad.png")} className="scale-face" />
          <input
            className="sad"
            type="radio"
            name="scale-choice"
            onClick={() => {
              console.log("hello1");
            }}
          />
        </label>
        <label>
          <img src={require("./icons/lil-sad.png")} className="scale-face" />
          <input className="lil-sad" type="radio" name="scale-choice" />
        </label>
        <label>
          <img src={require("./icons/neutral.png")} className="scale-face" />
          <input className="neutral" type="radio" name="scale-choice" />
        </label>
        <label>
          <img src={require("./icons/lil-happy.png")} className="scale-face" />
          <input className="lil-happy" type="radio" name="scale-choice" />
        </label>
        <label>
          <img src={require("./icons/happy.png")} className="scale-face" />
          <input className="happy" type="radio" name="scale-choice" />
        </label>
      </div>
    </>
  );
};

export default Scale;
