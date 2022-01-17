import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const AdminList = () => {
  const jobs = useSelector((state) => state.jobs);
  return (
    <>
      <hr />
      {jobs.map((e) => {
        <div>{e}</div>;
      })}
    </>
  );
};
