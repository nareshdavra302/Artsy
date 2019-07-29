/**
 * @format
 * @flow
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "../reducer";
import initialState from "../reducer/intialState";

let middleware = [thunk];
middleware = [...middleware];
export default function configureStore() {
  return createStore(allReducers, initialState, applyMiddleware(...middleware));
}