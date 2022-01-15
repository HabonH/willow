import { useState } from "react";
import axios from "axios";

const AuthForm = () => {
  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const emailHandler = (e) => {
    setUser((prev) => {
      // I used user here instead of email because I think that's the key
      // basic auth is expecting? Not sure though.
      return { ...prev, user: e.target.value };
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
