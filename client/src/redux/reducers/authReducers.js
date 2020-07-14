/**
 * Copyright (c) 2020
 *
 * @summary Authorization reducers
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import { SET_CURRENT_USER, REGISTER_USER } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  didRegister: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        didRegister: !isEmpty(action.payload),
      };
    case REGISTER_USER:
      return {
        ...state,
        didRegister: true,
      };
    default:
      return state;
  }
}
