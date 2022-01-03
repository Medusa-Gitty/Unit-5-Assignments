import { useState } from "react";

export const RecipeForm = () => {
  const [data, setData] = useState({});

  //Function to Post recipe in Database
  const addRecipe = () => {};

  const handleChange = (e) => {
    // console.log(e.target.value);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
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
        <button onClick={addRecipe}>Add Recipe</button>
      </form>
    </>
  );
};
