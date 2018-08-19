import { combineReducers } from "redux";
import lmsCredentialsReducer from "./lmsCredentialsReducer";
import lmsCourseMapReducer from "./lmsCourseMapReducer";

export default combineReducers({
  credentials: lmsCredentialsReducer,
  coursemap: lmsCourseMapReducer
});
