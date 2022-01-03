import { useState } from "react";

export const RecipeForm = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h3>Add your recipe</h3>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Add your recipe"
          onChange={handleChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Add your ingredients"
          onChange={handleChange}
        />
        <input
          type="number"
          name="time"
          placeholder="Cooking time?"
          onChange={handleChange}
        />
        <input
          type="text"
          name="instructions"
          placeholder="Add instructions"
          onChange={handleChange}
        />
      </form>
    </>
  );
};
