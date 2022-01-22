import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "../ThemeMUI/Theme";
import Nav from "./Nav";
import StudentRegister from "./StudentRegister";
import TherapistRegister from "./TherapistRegister";

const RegisterForm = (props) => {
  const [show, setShow] = useState(true);

  const view = () => {
    setShow(!show);
  };
  return (
    <div className='form-page'>
      <ThemeProvider theme={Theme}>
        <Nav view={view} />
        {show ? <StudentRegister /> : <TherapistRegister />}
      </ThemeProvider>
    </div>
  );
};

export default RegisterForm;
