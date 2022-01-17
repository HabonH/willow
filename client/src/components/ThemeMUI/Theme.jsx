import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#e0ecf8",
    },
    secondary: {
      main: "#b3cce4",
    },
    white: {
      main: "#fff",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default Theme;
