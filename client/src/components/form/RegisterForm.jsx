import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";
import Nav from "./Nav";
import StudentRegister from "./StudentRegister";
import TherapistRegister from "./TherapistRegister";

import axios from "axios";

const RegisterForm = (props) => {
  const [show, setShow] = useState(true);

  const close = () => {
    setShow(false);
  };
  return (
    <div className='form-page'>
      <ThemeProvider theme={Theme}>
        <Nav setShow={setShow} />
        {show ? (
          <StudentRegister close={close} />
        ) : (
          <TherapistRegister close={close} />
        )}
      </ThemeProvider>
    </div>
  );
};

export default RegisterForm;
