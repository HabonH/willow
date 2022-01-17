import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="app-name">AppName</h1>
      <div className="buttons-container">
        <Stack spacing={3} direction="row">
          <Button variant="contained">Login</Button>
          <Button variant="contained" color="white">
            Register
          </Button>
        </Stack>
      </div>
    </nav>
  );
};

export default Nav;
