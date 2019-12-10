import { combineReducers } from "redux";
import authReducer from "./auth";
import classesReducer from "./classes";

const rootReducer = combineReducers({
  auth: authReducer,
  classes: classesReducer
})

export default rootReducer
