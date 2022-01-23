import willowLogo from "../Homepage/assets/willow-logo.svg";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Nav = (props) => {
  const { view } = props;

  const navigate = useNavigate();
  return (
    <section>
      <nav className="form-navbar">
        <div className="logo-container">
          <img
            src={willowLogo}
            className="willow-logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </nav>
      <div className="form-sections">
        <h3 className="first-label" onClick={view}>
          Student
        </h3>
        <h3 className="second-label" onClick={view}>
          Therapist
        </h3>
      </div>
    </section>
  );
};

export default Nav;
