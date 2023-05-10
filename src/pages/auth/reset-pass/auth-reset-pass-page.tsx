import React from "react";
import { Box } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import '../auth-style.css'

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/auth/login');
  }

  return (
    <Box className="box">
      <span className="borderLine" />
      <form>
        <h2>Reset Password</h2>
        <div className="inputBox">
          <input type="text" required />
          <span>New Password</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <span>Confirm your Password</span>
          <i></i>
        </div>
        <input type="submit" value="Change" />
        <input type="submit" value="Cancel" onClick={navigateToLogin} />
      </form>
    </Box>
  );
};
export default ResetPasswordPage;
