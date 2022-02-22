const FinalView = (props) => {
  return (
    <>
      <div className="close-button" onClick={props.close}></div>
      <h1 className="final-view-title">Journal Saved!</h1>
      <p className="final-view-text">
        I'm proud of you for being courageous enough to write down your feelings.
      </p>

      <p className="journal-count-title">
        Journal Entries So Far:{" "}
        <strong className="journal-count">{props.journalCount}</strong>
      </p>
    </>
  );
};

export default FinalView;
