import { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    auth();
  };
  const auth = async () => {
    try {
      const res = await axios.get("http://localhost:3002/login", {
        auth: { username: user.email, password: user.password },
      });
      return console.log(res);
    } catch (e) {
      console.log(e);
    }
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
