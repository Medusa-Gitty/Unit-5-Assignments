import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addOne = (value) => {
    // if (count < 10)
    // setCount(count + value);
    setCount((prev) => {
      return prev + value;
    });
  };

  const multiplier = (value) => {
    // setCount(count * value);
    setCount((prev) => {
      return prev * value;
    });
  };

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={() => addOne(1)}>Add 1</button>
      <button onClick={() => addOne(-1)}>Remove 1</button>
      <button onClick={() => multiplier(2)}>2x Multiplier</button>
    </div>
  );
}

export default App;
