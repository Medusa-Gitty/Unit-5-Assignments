import { ADD_JOB, DELETE_JOB } from "./actionType";

const initialState = { jobs: [] };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_JOB:
      return {
        ...state,
        jobs: [state.jobs, payload],
      };
    case DELETE_JOB:
      return {};

    default:
      return state;
  }
};

export { reducer };
