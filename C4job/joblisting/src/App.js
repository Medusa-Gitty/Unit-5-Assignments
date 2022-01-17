import "./App.css";
import { AdminInput } from "./components/adminInput";
import { AdminList } from "./components/adminList";
import { Login } from "./components/login";

function App() {
  return (
    <div className="App">
      <Login />
      <AdminInput />
      <AdminList />
    </div>
  );
}

export default App;
