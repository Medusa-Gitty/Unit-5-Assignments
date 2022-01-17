import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const [login, setLogin] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(`Login Succeed`);
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter your Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Enter</button>
      </div>
    </>
  );
};
