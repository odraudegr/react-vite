import { Container } from "@mui/material";
import React from "react";
import { ItemProps } from "@/types/todo-item";
import Footer from "../footer/footer.component";
import TodoList from "../todo-list/todo-list.component";
import Header from "@/components/header/header.component";

type StateProps = {
  data: Array<ItemProps>;
  activeItem: ItemProps | null;
  loading: boolean;
};

class TodoContainer extends React.Component<{}, StateProps> {
  render() {
    return (
      <Container
        sx={{
          position: "fixed",
          top: 120,
          right: 20,
          borderRadius: 2,
          backgroundColor: "#e6f7f7",
          width: "50%"
        }}
      >
        <Header title="Todos" />
        <TodoList />
        <Footer />
      </Container>
    );
  }
}

export default TodoContainer;
