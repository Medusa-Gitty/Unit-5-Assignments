import { useState } from "react";
import { useRef } from "react";

export const Form = () => {
  const [data, setData] = useState({
    martialStatus: false, //default values
  });

  const fileRef = useRef();

  const handleChange = (e) => {
    // console.log(e.target);
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileRef.current.files[0]);
    console.log("final data ", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          name="username"
        />
        <br />
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter  your age"
          onChange={handleChange}
          name="age"
        />
        <br />
        <label>Address</label>
        <input
          type="text"
          placeholder="Enter your address"
          onChange={handleChange}
          name="address"
        />
        <br />
        <label>Department</label>
        <select name="department" onChange={handleChange}>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <br />
        <label>Salary</label>
        <input
          type="number"
          placeholder="Enter salary"
          onChange={handleChange}
          name="salary"
        />
        <br />
        <label>Martial Status</label>
        <input type="checkbox" name="martialStatus" onChange={handleChange} />
        <br />
        <label>Photo</label>
        <input type="file" ref={fileRef} onChange={handleChange} />
        <hr></hr>
        <input type="submit" />
      </form>
      <br />
    </>
  );
};
