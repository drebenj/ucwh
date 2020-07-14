/**
 * Copyright (c) 2020
 *
 * @summary This function checks if the user is logged in,
 * which provides persistence between exiting and refreshing
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-06-2020
 */

import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { setCurrentUser } from "../actions/authActions";
import store from "../../store";

export default function checkLoggedIn() {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      window.location.href = "./login";
    }
  }
}
