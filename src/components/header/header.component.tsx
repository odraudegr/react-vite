import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  dataLength: number;
}

const Header = ({dataLength}: Props) => <h3>Header ({dataLength})</h3>;

export default Header;

