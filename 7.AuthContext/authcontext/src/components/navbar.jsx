import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <div>
        Navbar:: Is the user logged in?
        {isAuth ? " true" : " false"}
      </div>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        Toggle
      </button>
    </div>
  );
};
