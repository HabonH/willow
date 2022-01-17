import { useState } from "react";

const Scale = (props) => {
  const [choiceMade, setChoiceMade] = useState(false);

  const [selected, setSelected] = useState("");

  const { back, getValue } = props;
  return (
    <>
      <h3 className='scale-title'>How do you feel today?</h3>
      <img
        src={require("./icons/arrow.png")}
        className='back-arrow'
        onClick={back}
        alt='back button'
      />
      <div className='scale-container'>
        <label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={selected}
          >
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
          </svg>
          <img
            alt='sad face'
            src={require("./icons/sad.png")}
            className='scale-face'
          />
          <input
            className='very sad radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              setSelected("selected1");
              getValue(1);
            }}
          />
        </label>
        <label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={selected}
          >
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
          </svg>
          <img
            alt='sad face'
            src={require("./icons/lil-sad.png")}
            className='scale-face'
          />
          <input
            className='lil-sad radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(2);
              setSelected("selected2");
            }}
          />
        </label>
        <label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={selected}
          >
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
          </svg>
          <img
            alt='neutral face'
            src={require("./icons/neutral.png")}
            className='scale-face'
          />
          <input
            className='neutral radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(3);
              setSelected("selected3");
            }}
          />
        </label>
        <label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={selected}
          >
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
          </svg>
          <img
            alt='happy face'
            src={require("./icons/lil-happy.png")}
            className='scale-face'
          />
          <input
            className='lil-happy radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(4);
              setSelected("selected4");
            }}
          />
        </label>
        <label>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={selected}
          >
            <path d='M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z' />
          </svg>
          <img
            alt='very happy face'
            src={require("./icons/happy.png")}
            className='scale-face'
          />
          <input
            className='happy radio'
            type='radio'
            name='scale-choice'
            onClick={() => {
              setChoiceMade(true);
              getValue(5);
              setSelected("selected5");
            }}
          />
        </label>
      </div>
      {choiceMade && (
        <button
          className='continue'
          onClick={() => {
            props.getView();
          }}
        >
          Continue
        </button>
      )}
    </>
  );
};

export default Scale;
