import { AGE_UP, AGE_DOWN, AGE_LOADING, AgeDispatchTypes } from "../actions/ageActionTypes";

interface AgeState {
  loading: boolean;
  age: number;
}

const initState: AgeState = {
  loading: false,
  age: 50,
};

export default (state: AgeState = initState, action: AgeDispatchTypes) => {
  switch (action.type) {
    case AGE_UP:
      return { loading: false, age: state.age + action.payload };
    case AGE_DOWN:
      return { loading: false, age: state.age - action.payload };
    case AGE_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
