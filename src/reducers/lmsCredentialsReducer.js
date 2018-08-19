import {
  FETCH_CREDENTIALS,
  FETCH_CREDENTIAL,
  ADD_CREDENTIAL,
  UPDATE_CREDENTIAL,
  DELETE_CREDENTIAL
} from "../types/types";

const intitalState = {
  items: []
};

export default function(state = intitalState, action) {
  console.log("returning credentials payload of type : " + action.type);

  switch (action.type) {
    case FETCH_CREDENTIALS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_CREDENTIAL:
      return {
        ...state,
        items: action.payload
      };
    case ADD_CREDENTIAL:
      return {
        ...state,
        items: action.payload
      };
    case UPDATE_CREDENTIAL:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_CREDENTIAL:
      return {
        ...state,
        items: action.payload
      };
    default:
      return intitalState;
  }
}
