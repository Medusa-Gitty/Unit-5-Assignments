import { useState } from "react";

export const TimerForm = ({ getData }) => {
  const [times, setTimes] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setTimes({ ...times, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(times);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter initial timer"
          name="initTime"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter end time"
          name="endTime"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
