import { useState } from "react";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-container">
      <button className="counter-btn" onClick={() => setCounter(counter + 1)}>
        Click me?
      </button>
      <p>You have clicked </p>
      <p className="counter-text">{counter}</p>
      <p> times</p>
    </div>
  );
}

export default Counter;
