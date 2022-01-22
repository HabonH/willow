import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      <Nav view={view} />
      {show ? (
        <StudentRegister view={view} />
      ) : (
        <TherapistRegister view={view} />
      )}
    </div>
  );
};

export default RegisterForm;
