import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '40px',
      }}
    >
      <AppBar position="static" sx={{backgroundColor: "transparent"}}>
        <Toolbar style={{ minHeight: 'fit-content' }}>
          <IconButton onClick={navigateHome} sx={{ mr: 2 }}>
            <HomeIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h5" color="#FFFFFF" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          <Button color="inherit" onClick={navigateToLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
