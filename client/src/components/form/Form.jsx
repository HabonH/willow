import StudentRegister from "./StudentRegister";
import TherapistRegister from "./TherapistRegister";
import { useState } from "react";
import Nav from "./Nav";

function Form(props) {
  const { submitHandler, emailHandler, passHandler } = props;
  const [show, setShow] = useState(true);

  return (
    <>
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
        />
      )}
    </>
  );
}

export default Form;
