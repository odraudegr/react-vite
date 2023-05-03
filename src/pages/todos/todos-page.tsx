import React from "react";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import TodoContainer from "@/sections/todos/todo-container/todo-container.component";
import { store } from "@/store/store";
import NavBar from "@/components/nav/navbar.component";

const TodosPage = () => {
  return (
    <Provider store={store}>
      <Box>
        <NavBar />
      </Box><br/><br/>
      <TodoContainer />
    </Provider>
  );
};

export default TodosPage;
