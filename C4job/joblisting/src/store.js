import { createStore } from "redux";
const initialState = { data: "data" };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
