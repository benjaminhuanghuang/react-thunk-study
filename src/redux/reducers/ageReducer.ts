import { AGE_UP, AGE_DOWN, AGE_LOADING, AGE_FAIL, AgeDispatchTypes } from "../actions/ageActionTypes";

interface AgeState {
  loading: boolean;
  fail: boolean;
  age: number;
}

const initState: AgeState = {
  loading: false,
  fail: false,
  age: 50,
};

export default (state: AgeState = initState, action: AgeDispatchTypes) => {
  switch (action.type) {
    case AGE_UP:
      return { loading: false, fail: false, age: state.age + action.payload };
    case AGE_DOWN:
      return { loading: false, fail: false, age: state.age - action.payload };
    case AGE_LOADING:
      return { ...state, loading: true, fail: false };
    case AGE_LOADING:
      return { ...state, loading: false, fail: true };
    default:
      return state;
  }
};
