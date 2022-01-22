import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import axios from "axios";

function StudentRegister(props) {
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

  return (
    <div className='form-container'>
      <form onSubmit={submitHandler} className='login-form'>
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

export default StudentRegister;
