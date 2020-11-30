import { Dispatch } from "redux";

import { AGE_DOWN, AGE_UP, AGE_LOADING, AGE_FAIL, AgeDispatchTypes } from "./ageActionTypes";

// The Action creators
export const AgeUp = (diff: number): AgeDispatchTypes => {
  return {
    type: AGE_UP,
    payload: diff,
  };
};

export const AgeDown = (diff: number): AgeDispatchTypes => {
  return {
    type: AGE_DOWN,
    payload: diff,
  };
};

export const AgeUpAsync = (diff: number) => {
  return (dispatch: Dispatch<AgeDispatchTypes>) => {
    try {
      dispatch({
        type: AGE_LOADING,
      });
      // asyc call
      setTimeout(() => {
        dispatch({
          type: AGE_UP,
          payload: diff,
        });
      }, 3000);
    } catch (e) {
      dispatch({
        type: AGE_FAIL,
      });
    }
  };
};
