import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset ":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  useReducer(reducer, initialState);

  return (
    <>
      <div>CounterOne</div>
      <button>Increment</button>
      <button>Decreement</button>
      <button>Reset</button>
    </>
  );
}

export default CounterOne;
