import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Nav from "./Homepage/Nav";

import axios from "axios";

const AuthForm = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const auth = () => {
    axios
      .post("http://localhost:3002/login", {
        email: user.email,
        password: user.password,
        type: user.type,
      })
      .then((res) => {
        if (res.data === "invalid") {
          setError("invalid");
        } else if (res.data === "no email") {
          // change error message to include email doesn't exist
          setError("no account");
        } else {
          // localStorage.setItem("user", res.data.email);
          // localStorage.setItem("userID", res.data.id);
          localStorage.setItem("userType", res.data.userType);
          localStorage.setItem("accessToken", res.data.accessToken)
          console.log(res.data);
          if (res.data.userType === "student") {
            navigate("/main");
          } else {
            navigate("/therapist");
          }
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

  const loginTypeHandler = (e) => {
    setError(false);
    setUser((prev) => {
      return { ...prev, type: e.target.value };
    });
  };

  return (
    <div className="home-container">
      <Nav />
      <div className="form-container">
        <form onSubmit={submitHandler} className="login-form">
          {error === "invalid" && (
            <p className="invalid-login">
              Sorry that username or password was incorrect!
            </p>
          )}
          {error === "no account" && (
            <p className="invalid-login">That account does not exist!</p>
          )}
          <input
            placeholder="Email"
            onChange={emailHandler}
            type="email"
            className="login-input"
          />
          <input
            placeholder="Password"
            onChange={passHandler}
            type="password"
            className="login-input"
          />
          <div className="login-radio-container">
            <p>Account type: </p>
            <label form="thearpist" className="radio-label">
              Therapist
              <input
                id="therapist"
                onChange={loginTypeHandler}
                type="radio"
                value="therapist"
                className="login-radio"
                name="login-type"
                required
              />
            </label>
            <label form="student" className="radio-label">
              Student
              <input
                id="student"
                onChange={loginTypeHandler}
                type="radio"
                value="student"
                className="login-radio"
                name="login-type"
              />
            </label>
          </div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
