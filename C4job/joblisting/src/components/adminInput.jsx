import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJob, deleteJob } from "../redux/action";

export const AdminInput = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Company"
        name="company"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Job Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Job Description"
        name="description"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="locaton"
        name="locaton"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Salary Range Min"
        name="min"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Salary Range Max"
        name="max"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          dispatch(addJob(data));
        }}
      >
        ADD JOB
      </button>
    </>
  );
};
