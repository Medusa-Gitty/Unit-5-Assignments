import { useState } from "react";

export const GroceryInput = ({ getData }) => {
  const [text, setText] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClick = () => {
    getData(text);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter a grocery name"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add Grocery Item</button>
    </>
  );
};
