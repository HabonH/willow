import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import willowLogo from "./assets/willow-logo.svg";

import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src={willowLogo}
          className="willow-logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="buttons-container">
        <Stack spacing={3} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              navigate("/user");
            }}
            color="primary"
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="neutral"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Nav;
