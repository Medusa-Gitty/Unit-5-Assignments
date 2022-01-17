import { ADD_JOB, DELETE_JOB } from "./actionType";

const addJob = (data) => {
  return {
    type: ADD_JOB,
    payload: data,
  };
};

const deleteJob = (id) => {
  return {
    type: DELETE_JOB,
    payload: id,
  };
};

export { addJob, deleteJob };
