import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import axios from "axios";

function TherapistRegister(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const auth = async () => {
    try {
      const res = await axios.get("http://localhost:3002/login", {
        auth: { username: user.email, password: user.password },
      });
      // if user does not exist add them to database and set localStorage
      if (!res) {
        console.log(res.data);

        //make post to students / post to therapist
        // axios.post("http://localhost:3002/login", student);
        localStorage.setItem("user", res.data.email);
        localStorage.setItem("userID", res.data.id);
        navigate("/main");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    auth();
  };

  const emailHandler = (e) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const passHandler = (e) => {
    setUser((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const nameHandler = (e) => {
    setUser((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const organizationHandler = (e) => {
    setUser((prev) => {
      return { ...prev, organization: e.target.value };
    });
  };

  const titleHandler = (e) => {
    setUser((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const descriptionHandler = (e) => {
    setUser((prev) => {
      return { ...prev, description: e.target.value };
    });
  };

  const profileHandler = (e) => {
    setUser((prev) => {
      return { ...prev, profile: e.target.value };
    });
  };

  const phoneHandler = (e) => {
    setUser((prev) => {
      return { ...prev, phone: e.target.value };
    });
  };

  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} className='login-form'>
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
        <input
          placeholder='Description'
          onChange={descriptionHandler}
          type='description'
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
