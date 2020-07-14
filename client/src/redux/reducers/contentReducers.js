import { GET_ROSTER } from "../actions/types";

const initialState = {
  roster: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ROSTER:
      return {
        ...state,
        roster: action.payload,
      };
    default:
      return state;
  }
}
