import React, { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import reducer2 from "./utils/reducer2";
import ComponentA from "./components/ComponentA";


export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer2, initialState);

  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch }}>
      <>
        <h1>This is useReducer samples snippet</h1>
        count state(global) from app js - {count}
        <ComponentA />
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}
      </>
    </CountContext.Provider>
  );
}

export default App;
