import React from "react";
import { Button } from "@mui/material";

function StepTwo(props) {
  const {
    phoneHandler,
    emailHandler,
    passHandler,
    back,
    submitHandler,
    error,
  } = props;
  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} className='login-form'>
        {error && (
          <p className='invalid-Register'>Please fill out all fields!</p>
        )}
        <input
          placeholder='Phone'
          onChange={phoneHandler}
          type='phone'
          className='login-input'
        />
        <input
          placeholder='Email'
          onChange={emailHandler}
          type='email'
          className='login-input'
        />
        <input
          placeholder='Password'
          onChange={passHandler}
          type='password'
          className='login-input'
        />
        <Button variant='contained' color='primary' type='submit'>
          Register
        </Button>
        <img
          src={require("../dashboard/Addjournal/icons/arrow.png")}
          className='form-back-arrow'
          onClick={back}
          alt='back button'
        />
      </form>
    </div>
  );
}

export default StepTwo;
