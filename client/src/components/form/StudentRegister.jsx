import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import axios from "axios";

function StudentRegister(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ type: "student" });
  const [error, setError] = useState(false);

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

  return (
    <div className="form-container">
      <form onSubmit={submitHandler} className="login-form">
        {error && (
          <p className="invalid-Register">Sorry that email already exists!</p>
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
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}

export default StudentRegister;
