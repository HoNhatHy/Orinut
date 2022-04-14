import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from "../actions/type";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userImg: "",
};

export default (state = { ...INITIAL_STATE }, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        userImg: action.payload.userImg,
      };

    case GOOGLE_SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null, userImg: "" };

    default:
      return { ...state };
  }
};
