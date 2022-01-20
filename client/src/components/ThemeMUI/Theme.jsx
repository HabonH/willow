import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  status: {
    danger: "#D3D3D",
  },
  palette: {
    primary: {
      main: "#C9E4D7",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#FEEE8C",
      contrastText: "#FFFFFF"
    },
    white: {
      main: "#FFFFFF",
    },
    neutral: {
      main: "#525F76",
      contrastText: "#FFFDE1",
    },
    text: {
      primary: '#525F76',
      secondary: '#FFFDE1',
    },
    background: {
      default: '#C9E4D7',
    },
  },
});

export default Theme;
