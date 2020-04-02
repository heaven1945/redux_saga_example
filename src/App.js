import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from "./rootSlice";

const App = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.num);

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync())}>
        Increment After 1 sec
      </button>
      <button onClick={() => dispatch(decrementAsync())}>
        Decrement After 1 sec
      </button>
    </>
  );
};

export default App;
