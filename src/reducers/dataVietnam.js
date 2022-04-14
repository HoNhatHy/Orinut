import { TAKE_DATA_COUNTRY } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case TAKE_DATA_COUNTRY:
      return action.payload;
    default:
      return [...state];
  }
};
