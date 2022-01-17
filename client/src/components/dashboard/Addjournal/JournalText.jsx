import { useState } from "react";

const JournalText = (props) => {
  const [text, setText] = useState({ title: "", textArea: "" });

  const changeTitleHandler = (e) => {
    setText((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const changeTextAreaHandler = (e) => {
    setText((prev) => {
      return { ...prev, textArea: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.getTextData(text);
  };

  return (
    <>
      <h3 className="choice-title">What happened?</h3>
      <img
        src={require("./icons/arrow.png")}
        className="back-arrow"
        onClick={props.back}
        alt="back button"
      />
      <form className="journal-form" onSubmit={submitHandler}>
        <label>
          <input
            name="title"
            placeholder="Title.."
            className="journal-text-title"
            value={text.title}
            onChange={changeTitleHandler}
          />
        </label>
        <label>
          <textarea
            name="text"
            placeholder="Let it out."
            className="journal-text"
            value={text.textArea}
            onChange={changeTextAreaHandler}
          />
        </label>
        {text.textArea.length > 0 && (
          <button className="journal-submit-button" type="submit">
            Save
          </button>
        )}
      </form>
    </>
  );
};

export default JournalText;
