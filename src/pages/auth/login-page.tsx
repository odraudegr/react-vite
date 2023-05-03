import { Box } from "@mui/material";
import React from "react";
import {useNavigate} from 'react-router-dom';
import './login-style.css'

const LoginPage = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  return (
    <Box className="box">
      <span className="borderLine" />
      <form>
        <h2>Sign In</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
        <input type="submit" value="Home" onClick={navigateHome} />
      </form>
    </Box>
  );
};
export default LoginPage;
