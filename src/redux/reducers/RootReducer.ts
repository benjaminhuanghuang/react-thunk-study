import { combineReducers } from "redux";
//
import helloReduxReducer from "./helloReduxReducer";
import ageReducer from "./ageReducer";

const RootReducer = combineReducers({
  hello: helloReduxReducer,
  age: ageReducer,
});

export default RootReducer;
