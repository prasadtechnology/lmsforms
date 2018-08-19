import {
  FETCH_COURSE_MAPS,
  FETCH_COURSE_MAP,
  ADD_COURSE_MAP,
  UPDATE_CREDENTIAL,
  DELETE_COURSE_MAP
} from "../types/types";

const intitalState = {
  items: [],
  item: {}
};

export default function(state = intitalState, action) {
  console.log("returning course map payload of type : " + action.type);

  switch (action.type) {
    case FETCH_COURSE_MAPS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_COURSE_MAP:
      return {
        ...state,
        item: action.payload
      };
    case ADD_COURSE_MAP:
      return {
        ...state,
        item: action.payload
      };
    case UPDATE_CREDENTIAL:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_COURSE_MAP:
      return {
        ...state,
        item: action.payload
      };
    default:
      return intitalState;
  }
}
