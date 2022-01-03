import { useState } from "react";

export const RecipeForm = () => {
  const [data, setData] = useState({});
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //Function for getting the recipe dataset
  const getRecipe = () => {
    fetch("http://localhost:3001/recipe")
      .then((data) => data.json)
      .then((res) => {
        console.log(res);
        setRecipes(res);
      });
  };

  //Function to Post recipe in Database
  const addRecipe = (e) => {
    e.preventDefault();
    console.log("final data to add in db:", data);

    fetch("http://localhost:3001/recipe", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
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
