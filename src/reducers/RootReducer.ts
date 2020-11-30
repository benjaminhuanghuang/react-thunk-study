import {combineReducers} from "redux";
//
import helloReduxReducer from './helloReduxReducer'

const RootReducer = combineReducers({
  hello: helloReduxReducer
});

export default RootReducer