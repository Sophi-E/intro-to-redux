import React from "react";
import "./styles.css";
import Posts from "./components/Posts";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <Posts />
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}> + </button> <br />
      <button onClick={() => dispatch(decrement(3))}> - </button> <br />
      {isLogged ? <h3>Sensistive information</h3> : <button>Log in</button>}
    </div>
  );
}
