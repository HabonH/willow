import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import StudentRegister from "./StudentRegister";
import TherapistRegister from "./TherapistRegister";

const RegisterForm = (props) => {
  const [view, setView] = useState("student");

  const showTherapist = () => {
    setView("therapist");
  };
  const showStudent = () => {
    setView("student");
  };

  return (
    <div className='form-page'>
      <Nav showTherapist={showTherapist} showStudent={showStudent} />
      {view === "student" && <StudentRegister />}
      {view === "therapist" && <TherapistRegister />}
    </div>
  );
};

export default RegisterForm;
