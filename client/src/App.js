import Home from "./components/Homepage/Home";
import AuthForm from "./components/AuthForm";
import Main from "./components/Main";
import RegisterForm from "./components/form/RegisterForm";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<AuthForm />} />
          <Route path='/main' element={<Main />} />
          <Route path='/register' element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
