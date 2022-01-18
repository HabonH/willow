import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <h1 className="app-name">AppName</h1>
      <div className="buttons-container">
        <Stack spacing={3} direction="row">
          <Button
            variant="contained"
            onClick={() => {
              navigate("/user");
            }}
          >
            Login
          </Button>
          <Button variant="contained" color="white">
            Register
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Nav;
