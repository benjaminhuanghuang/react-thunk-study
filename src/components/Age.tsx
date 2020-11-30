import React from "react";
import {Wrapper} from "../styles";
// redux
import { RootStore } from "../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { AgeUp, AgeDown } from "../redux/actions/ageActions";
//
import logo from '../logo.svg';

export default function () {
  const ageState = useSelector((state: RootStore) => state.age);
  const dispatch = useDispatch();

  const handleUp = () => dispatch(AgeUp(2));
  const handleDown = () => dispatch(AgeDown(3));

  return (
    <Wrapper>
       <div className="Age-label">
          your age: <span>{ageState.age}</span>
        </div>
        <button onClick={handleUp}>Age UP</button>
        <button onClick={handleDown}>Age Down</button>
        {ageState.loading && <img src={logo} className="App-logo" />}
    </Wrapper>
  );
}
