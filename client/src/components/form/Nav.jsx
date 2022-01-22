import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import willowLogo from "../Homepage/assets/willow-logo.svg";
import "./Form.css";

import { useNavigate } from "react-router-dom";
const Nav = (props) => {
  const { setShow } = props;
  return (
    <section>
      <nav className='form-navbar'>
        <div className='logo-container'>
          <img src={willowLogo} className='willow-logo' />
        </div>
      </nav>
      <div className='form-sections'>
        <h3
          className='first-label'
          onClick={() => {
            setShow(true);
          }}
        >
          Student
        </h3>
        <h3
          className='second-label'
          onClick={() => {
            setShow(false);
          }}
        >
          Therapist
        </h3>
      </div>
    </section>
  );
};

export default Nav;
