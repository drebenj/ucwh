/**
 * Copyright (c) 2020
 *
 * @summary Redux root reducer
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import contentReducer from "./contentReducers";

export default combineReducers({
  content: contentReducer,
  auth: authReducer,
  errors: errorReducer,
});
