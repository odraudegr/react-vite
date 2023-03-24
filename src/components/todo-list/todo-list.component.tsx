import React from "react";
import { ItemProps } from "../../types/todo-item";
import TodoItem from "../todo-item/todo.item.component";

const data: ItemProps[] = [
  {
    description: "Item 1",
    id: 1,
    status: "inProgress"
  },
  {
    description: "Item 2",
    id: 2,
    status: "done"
  },
  {
    description: "Item 3",
    id: 3,
    status: "inProgress"
  }
];

const TodoList = () =>
  <React.Fragment>
    {data.map((item) => (
      <>
        <TodoItem item={item} />
      <br/>
      </>
    ))}
  </React.Fragment>
;

export default TodoList;

