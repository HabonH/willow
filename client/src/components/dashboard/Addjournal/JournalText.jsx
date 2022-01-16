const JournalText = (props) => {
  return (
    <>
      <h3 className="choice-title">What happened?</h3>
      <form className="journal-form">
        <label>
          <input
            name="title"
            placeholder="Title.."
            className="journal-text-title"
          />
        </label>
        <label>
          <textarea
            name="text"
            placeholder="Let it out."
            className="journal-text"
          />
        </label>
      </form>
    </>
  );
};

export default JournalText;
