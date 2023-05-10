import React from "react";
import { Box } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import '../auth-style.css'


const SignupPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/auth/login');
  }

  return (
    <Box className="box">
      <span className="borderLine" />
      <form>
        <h2>Sign Up</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Password</span>
          <i></i>
        </div>
        <input type="submit" value="SIGN UP" />
        <input type="submit" value="Cancel" onClick={navigateToLogin} />
      </form>
    </Box>
  );
};
export default SignupPage;
