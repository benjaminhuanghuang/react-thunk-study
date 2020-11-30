import { AGE_DOWN, AGE_UP, AgeDispatchTypes } from "./ageActionTypes";

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
