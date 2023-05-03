import React from "react";
import { Box } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import NavBar from "../../components/nav/navbar.component";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTodos = () => {
    navigate('/todos');
  };

  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "40px",
          left: 0,
          width: "100%",
          height: "100%",
          alignItems: "center",
          textAlign: "center",
          color: "#3F51B5",
          backgroundColor: "darkgrey",
        }}
      >
        <div>Home Page</div>
        <Button color="primary" onClick={navigateToTodos}>Todos</Button>
      </Box>
    </Box>
  );
};

export default HomePage;
