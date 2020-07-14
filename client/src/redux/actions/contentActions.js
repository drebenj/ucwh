import axios from "axios";

import { GET_ERRORS, GET_ROSTER } from "./types";

export const getRoster = (userData) => (dispatch) => {
  axios
    .get("/api/users/roster", userData)
    .then((res) => {
      dispatch({ type: GET_ROSTER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
