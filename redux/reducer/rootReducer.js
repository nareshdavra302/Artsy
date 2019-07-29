/**
 * @format
 * @flow
 */

import initialState from "./intialState";
import * as types from "../action/actionTypes";
// root reducer
export default function(state: any = initialState, action: any = {}) {
  try {
    switch (action.type) {
     
      default:
        return state;
    }
  } catch (error) {
    return state;
  }
}
