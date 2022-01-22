import { useState } from "react";

import Button from "@mui/material/Button";

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
      <h3 className='choice-title'>What happened?</h3>
      <img
        src={require("./icons/arrow.png")}
        className='back-arrow'
        onClick={props.back}
        alt='back button'
      />
      <form className='journal-form' onSubmit={submitHandler}>
        <label>
          <input
            name='title'
            placeholder='Title..'
            className='journal-text-title'
            value={text.title}
            onChange={changeTitleHandler}
          />
        </label>
        <label>
          <textarea
            name='text'
            placeholder='Let it out.'
            className='journal-text'
            value={text.textArea}
            onChange={changeTextAreaHandler}
          />
        </label>
        {text.textArea.length > 0 && (
          <div className='flex-container'>
            <Button
              variant='contained'
              color='secondary'
              type='submit'
              style={{
                color: "white",
                textShadow: "0px 1px 5px rgba(0, 0, 0, 0.274)",
                marginTop: "1rem",
              }}
            >
              Continue
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default JournalText;
