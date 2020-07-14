/**
 * Copyright (c) 2020
 *
 * @summary Redux store
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
