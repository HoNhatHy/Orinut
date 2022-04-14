import _ from "lodash";

import { CREATE_ORDER, DELETE_ORDER, FETCH_ORDER } from "../actions/type";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_ORDER:
      return _.omit(state, action.payload);

    default:
      return { ...state };
  }
};
