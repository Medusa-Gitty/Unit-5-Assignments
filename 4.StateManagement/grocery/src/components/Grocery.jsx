import { useState } from "react";
import { GroceryList } from "./GroceryList";
import { GroceryInput } from "./GroceryInput";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [list, setList] = useState([]);

  const handleClick = (data) => {
    console.log("Data in Parent from child input- ", data);
    const payload = {
      name: data,
      id: nanoid(10),
    };
    setList([...list, payload]);
  };

  const handleRemove = (id) => {
    console.log("removed", id);
  };

  return (
    <>
      <GroceryInput getData={handleClick} />
      {list.map((e) => (
        <GroceryList name={e.name} key={e.id} handleRemove={handleRemove} />
      ))}
    </>
  );
};
