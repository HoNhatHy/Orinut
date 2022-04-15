import { combineReducers } from "redux";

import googleAuthReducer from "./googleAuthReducer";
import fbAuthReducer from "./fbAuthReducer";
import orderReducer from "./orderReducer";
import dataVietnam from "./dataVietnam";
import darkScreen from "./darkScreen";

export default combineReducers({
  googleAuth: googleAuthReducer,
  fbAuth: fbAuthReducer,
  order: orderReducer,
  dataVietnam,
  hiddenScroll: darkScreen,
});
