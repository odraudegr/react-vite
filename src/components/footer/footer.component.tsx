import React from "react";

type Props = {
  onAddNewItem: () => void;
}

const Footer = ({ onAddNewItem }: Props) => {

  const handleClick = () => {
    console.log('Add Item');
    onAddNewItem();
  }

  return (
    <button onClick={handleClick}>+ Add new Item</button>
  )
};

export default Footer;

