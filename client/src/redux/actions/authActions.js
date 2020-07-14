/**
 * Copyright (c) 2020
 *
 * @summary Redux authorization actions
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import axios from "axios";
import { setAuthToken } from "../utils";
import jwt_decode from "jwt-decode";

import {
  GET_ROSTER,
  GET_ERRORS,
  SET_CURRENT_USER,
  REGISTER_USER,
} from "./types";

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => {
      dispatch({ type: REGISTER_USER });
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  dispatch({ type: GET_ROSTER, payload: {} });
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
