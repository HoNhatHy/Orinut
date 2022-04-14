import { FACEBOOK_SIGN_IN, FACEBOOK_SIGN_OUT } from "../actions/type";

const INITIAL_STATE = {
  status: "unknown",
  userId: null,
  fbUserImg: "",
};

export default (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case FACEBOOK_SIGN_IN:
      return {
        ...state,
        status: "connected",
        userId: action.payload.userId,
        fbUserImg: action.payload.userImg,
      };

    case FACEBOOK_SIGN_OUT:
      return { ...state, status: "unknown", userId: null, fbUserImg: "" };

    default:
      return { ...state };
  }
};
