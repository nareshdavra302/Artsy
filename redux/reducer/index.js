/**
 * @format
 * @flow
 */
import { combineReducers } from "redux";
import root from "./rootReducer";

const allReducers = combineReducers({
  root,
  // you can add more reducers here, separated by , !
});
export default allReducers;
