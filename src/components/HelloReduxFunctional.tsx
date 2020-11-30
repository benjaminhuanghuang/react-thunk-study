import React from "react";
// redux
import { RootStore } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { ChangeHelloName } from "../actions/helloActions";

export default function () {
  const helloState = useSelector((state: RootStore) => state.hello);
  const dispatch = useDispatch();

  const handleSubmit = () => dispatch(ChangeHelloName("New hello name" + new Date().getTime()));

  return (
    <div>
      <h2>Hello Redux Functional Component</h2>
      <h2>{helloState.name}</h2>
      <button className="btn" onClick={handleSubmit}>
        Change the state
      </button>
    </div>
  );
}
