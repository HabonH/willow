const FinalView = (props) => {
  return (
    <>
      <div className="close-button" onClick={props.close}></div>
      <h1 className="final-view-title">Journal Saved!</h1>
      <p className="final-view-text">
        I'm proud of you for taking a risk and writing down your feelings.
      </p>
    </>
  );
};

export default FinalView;
