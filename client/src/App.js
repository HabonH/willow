import Home from "./components/Homepage/Home";
import AuthForm from "./components/AuthForm";
import Main from "./components/Main";
import RegisterForm from "./components/form/RegisterForm";
import Theme from "./components/ThemeMUI/Theme";
import TherapistDashboard from "./components/TherapistPortal/TherapistDashboard";

import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const user = localStorage.getItem("user");
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<AuthForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {user && userType === "student" ? (
            <>
              <Route path="/main" element={<Main />} />
            </>
          ) : (
            <Route path="/main" element={<Home />} />
          )}
          {user && userType === "therapist" ? (
            <>
              <Route path="/therapist" element={<TherapistDashboard />} />
            </>
          ) : (
            <Route path="/therapist" element={<Home />} />
          )}
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
