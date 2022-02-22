import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import axios from "axios";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function TherapistRegister(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState({ type: "therapist" });
  const [error, setError] = useState(false);
  const [view, setView] = useState("stepOne");

  const back = () => {
    setView("stepOne");
  };

  const getView = () => {
    if (view === "stepOne") {
      setView("stepTwo");
    }
  };

  const auth = () => {
    axios
      .post("http://localhost:3002/register", {
        email: user.email,
        password: user.password,
        type: user.type,
        name: user.name,
        organization: user.organization,
        title: user.title,
        description: user.description,
        profile: user.profile,
        phone: user.phone,
      })
      .then((res) => {
        if (res.data === "user exists") {
          setError(true);
        } else {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("userType", res.data.userType);
          navigate("/therapist");
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
    <>
      {view === "stepOne" && (
        <StepOne
          getView={getView}
          nameHandler={nameHandler}
          organizationHandler={organizationHandler}
          titleHandler={titleHandler}
          descriptionHandler={descriptionHandler}
          profileHandler={profileHandler}
          error={error}
        />
      )}
      {view === "stepTwo" && (
        <StepTwo
          phoneHandler={phoneHandler}
          emailHandler={emailHandler}
          passHandler={passHandler}
          submitHandler={submitHandler}
          back={back}
          error={error}
        />
      )}
    </>
  );
}

export default TherapistRegister;
