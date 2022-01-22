import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import axios from "axios";

function TherapistRegister(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ type: "therapsit" });
  const [error, setError] = useState(false);
  const [view, setView] = useState("add");

  const back = () => {
    if (view === "step2") {
      setView("step1");
    } 
  };

  const getView = () => {
    if (view === "step1") {
      setView("step2");
  };

  const auth = () => {
    axios
      .post("http://localhost:3002/register", {
        email: user.email,
        password: user.password,
        type: user.type,
      })
      .then((res) => {
        if (res.data === "invalid") {
          setError(true);
        } else {
          localStorage.setItem("user", res.data.email);
          localStorage.setItem("userID", res.data.id);
          navigate("/main");
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    auth();
  };

  const emailHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const passHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const nameHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const organizationHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, organization: e.target.value };
    });
  };

  const titleHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const descriptionHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, description: e.target.value };
    });
  };

  const profileHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, profile: e.target.value };
    });
  };

  const phoneHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} className='login-form'>
        {view === "step1" && ({error && (
          <p className='invalid-Register'>Please fill out all fields!</p>
        )} )}
        <input
          placeholder='Name'
          onChange={nameHandler}
          type='name'
          className='login-input'
        />
        <input
          placeholder='Organization'
          onChange={organizationHandler}
          type='organization'
          className='login-input'
        />
        <input
          placeholder='Title'
          onChange={titleHandler}
          type='title'
          className='login-input'
        />
        {/* <input
          placeholder='Description'
          onChange={descriptionHandler}
          type='description'
          className='login-input'
        /> */}
        <textarea
            type="text"
            placeholder="Let it out."
            onChange={descriptionHandler}
            className='login-input'
          />
        <input
          placeholder='Profile Picture URL'
          onChange={profileHandler}
          type='profile'
          className='login-input'
        />
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
      </form>
    </div>
  );
}

export default TherapistRegister;
