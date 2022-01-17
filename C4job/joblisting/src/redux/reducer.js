import { ADD_JOB, DELETE_JOB, LOGIN_SUCCESS, LOGIN_FAILED } from "./actionType";

const initialState = { jobs: [], login: {}, auth: false, toggle: false };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_JOB:
//       return {
//         ...state,
//         jobs: [state.jobs, payload],
//       };
//     case DELETE_JOB:
//       return {};

//     default:
//       return state;
//   }
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      const { data } = action.payload;
      // return {
      //   ...state,
      //   data: [...state.jobs, data],
      // };
      return { ...state, jobs: [...state.jobs, data] };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: true,
        login: state.login,
        toggle: state.toggle === false ? true : false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export { reducer };
