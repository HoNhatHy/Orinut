import {
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  FACEBOOK_SIGN_IN,
  FACEBOOK_SIGN_OUT,
  CREATE_ORDER,
  DELETE_ORDER,
  FETCH_ORDER,
  TAKE_DATA_COUNTRY,
} from "./type";

import history from "../history";
import orders from "../apis/orders";
import axios from "axios";

export const googleSignIn = function (userId, userImg) {
  return {
    type: GOOGLE_SIGN_IN,
    payload: { userId, userImg },
  };
};

export const googleSignOut = function () {
  return {
    type: GOOGLE_SIGN_OUT,
  };
};

export const facebookSignIn = function (userId, userImg) {
  return {
    type: FACEBOOK_SIGN_IN,
    payload: { userId, userImg },
  };
};

export const facebookSignOut = function () {
  return {
    type: FACEBOOK_SIGN_OUT,
  };
};

export const createOrder = function (formValues) {
  return async (dispatch, getState) => {
    const fbUserId = getState().fbAuth.userId;
    const googleUserId = getState().googleAuth.userId;
    const response = await orders.post("/data", {
      ...formValues,
      fbUserId,
      googleUserId,
    });

    dispatch({
      type: CREATE_ORDER,
      payload: response.data,
    });
  };
};

export const deleteOrder = function (id) {
  return async (dispatch) => {
    await orders.delete("/data", id);

    dispatch({
      type: DELETE_ORDER,
      payload: id,
    });
  };
};

export const fetchOrder = function (id) {
  return async (dispatch) => {
    const response = await orders.get(`/data/${id}`);

    dispatch({
      type: FETCH_ORDER,
      payload: response.data,
    });
  };
};

export const takeDataCountry = function () {
  return async (dispatch) => {
    const response = await axios.get(
      "https://provinces.open-api.vn/api/?depth=2"
    );

    dispatch({
      type: TAKE_DATA_COUNTRY,
      payload: response.data,
    });
  };
};
