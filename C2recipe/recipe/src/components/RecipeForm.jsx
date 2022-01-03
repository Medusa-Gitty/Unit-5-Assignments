import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  DivMain,
  DivAddRecipe,
  DivAllRecipe,
  Form,
  DisplayData,
} from "./styles";

export const RecipeForm = () => {
  const [data, setData] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState();

  //Displaying data 1st time
  useEffect(() => {
    getRecipe();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  //Function for getting the recipe dataset
  const getRecipe = () => {
    fetch("http://localhost:3001/recipe")
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setRecipes(res);
      });
  };

  //Function to Post recipe in Database
  const addRecipe = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/recipe", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    }).then(() => {
      getRecipe();
    });
  };

  const Displaying = () => {
    if (recipe) {
      return (
        <>
          <div>Title : {recipe.title}</div>
          <div>Ingredient : {recipe.ingredients}</div>
          <div>Cooking time : {recipe.time}</div>
          <div>Instrucions: {recipe.instructions}</div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <DivMain>
        <DivAddRecipe>
          <h3>Add your recipe</h3>
          <Form>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Add your recipe"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Ingredients</label>
              <input
                type="text"
                name="ingredients"
                placeholder="Add your ingredients"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Cooking Time (in minutes)</label>
              <input
                type="number"
                name="time"
                placeholder="Cooking time?"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Instructions</label>
              <input
                type="text"
                name="instructions"
                placeholder="Add instructions"
                onChange={handleChange}
              />
            </div>
            <Button onClick={addRecipe}>Add Recipe</Button>
          </Form>
        </DivAddRecipe>

        <DivAllRecipe>
          {/* Displaying all recipe */}
          {recipes.map((e, i) => (
            <>
              <div
                onClick={() => {
                  setRecipe(e);
                }}
              >
                <div key={i}>Title: {e.title} </div>
                <div>Cooking time: {e.time} mins</div>
                <hr></hr>
              </div>
            </>
          ))}
        </DivAllRecipe>
      </DivMain>

      {/* Displaying selected recipe */}
      <DisplayData>
        <Displaying />
      </DisplayData>
    </>
  );
};
