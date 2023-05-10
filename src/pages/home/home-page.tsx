import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import NavBar from "../../components/nav/navbar.component";
import "./home-page-style.css";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTodos = () => {
    navigate("/todos");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF",
      }}
    >
      <Box sx={{ mb: 10 }}>
        <NavBar />
      </Box>

      <Button
        sx={{ top: 380, right: 50 }}
        variant="contained"
        onClick={navigateToTodos}
      >
        Go Todos {"-->"}
      </Button>

      <Box
        sx={{
          fontSize: "115px",
          lineWeight: "bold",
          float: "right",
          width: "40%",
          height: "70%",
        }}
      >
        Your journey Your story Your activities All in just one ToDo App
      </Box>
    </Box>
  );
};

export default HomePage;
