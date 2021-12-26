// import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr1 = [`Android`, `Blackberry`, `iPhone`, `Windows Phone`];
  let arr2 = [`Samsung`, `HTC`, `Micromax`, `Apple`];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <Phones arr={arr1} />
      <h1>Mobile Manufacturers</h1>
      <Phones arr={arr2} />
    </div>
  );
}

function Phones({ arr }) {
  return (
    <ul>
      {arr.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}

export default App;
