/**
 * Copyright (c) 2020
 *
 * @summary Error reducers
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
