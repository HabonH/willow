import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const AuthForm = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const auth = async () => {
    try {
      const res = await axios.get("http://localhost:3002/login", {
        auth: { username: user.email, password: user.password },
      });
      if (res) {
        console.log(res.data);
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
    <form onSubmit={submitHandler}>
      <input placeholder="email" onChange={emailHandler} type="email" />
      <input placeholder="password" onChange={passHandler} type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
