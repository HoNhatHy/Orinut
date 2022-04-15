import { DARK_SCREEN } from "../actions/type";

export default (state = "", action) => {
  switch (action.payload) {
    case DARK_SCREEN:
      return action.payload;
    default:
      return state;
  }
};
