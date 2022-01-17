import { ADD_JOB, DELETE_JOB, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionType";

const addJob = (data) => {
  // console.log(data);
  return {
    type: ADD_JOB,
    payload: {
      data,
    },
  };
};

const deleteJob = (id) => {
  return {
    type: DELETE_JOB,
    payload: id,
  };
};

const loginsuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const loginfailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};

export { addJob, deleteJob, loginsuccess, loginfailed };
