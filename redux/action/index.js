/**
 * @format
 * @flow
 */
import * as types from "./actionTypes";
// action creator

export const success = (userObj: any) => {
  return { type: types.SUCCEEDED, userObj };
};

export const fail = (error: any) => {
  return { type: types.FAILED, error };
};
