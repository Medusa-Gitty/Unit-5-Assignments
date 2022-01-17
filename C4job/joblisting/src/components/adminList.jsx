import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const AdminList = () => {
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);
  return (
    <>
      <hr />
      {jobs.map((e) => (
        <div>
          <h2>Company: {e.company}</h2>
          <h4>Job Title: {e.title}</h4>
          <p>Description: {e.description}</p>
          <p>Location: {e.locaton}</p>
          <div>
            Salary {e.min} -- {e.max}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};
