import React from "react";
import { Box } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import './auth-style.css';
import "../home/home-page-style.css";

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
          <a href="/#/auth/resetpassword">Forgot Password</a>
          <a href="/#/auth/signup">Signup</a>
        </div>
        <input type="submit" value="Login" />
        <input type="submit" value="Home" onClick={navigateHome} />
      </form>
    </Box>
  );
};
export default LoginPage;
