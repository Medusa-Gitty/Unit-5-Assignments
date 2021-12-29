import { useState } from "react";
import { GroceryInput } from "./GroceryInput";

export const Todo = () => {
  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <>
      <GroceryInput getData={handleClick} />
    </>
  );
};
