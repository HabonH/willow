import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";
import Nav from "./Nav";
import StudentRegister from "./StudentRegister";
import TherapistRegister from "./TherapistRegister";

import axios from "axios";

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [show, setShow] = useState(true);

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
    <div className='form-page'>
      <ThemeProvider theme={Theme}>
        <Nav setShow={setShow} />
        {show ? (
          <StudentRegister
            submitHandler={submitHandler}
            emailHandler={emailHandler}
            passHandler={passHandler}
          />
        ) : (
          <TherapistRegister
            submitHandler={submitHandler}
            emailHandler={emailHandler}
            passHandler={passHandler}
            nameHandler={nameHandler}
            organizationHandler={organizationHandler}
            titleHandler={titleHandler}
            descriptionHandler={descriptionHandler}
            profileHandler={profileHandler}
            phoneHandler={phoneHandler}
          />
        )}
      </ThemeProvider>
    </div>
  );
};

export default RegisterForm;
