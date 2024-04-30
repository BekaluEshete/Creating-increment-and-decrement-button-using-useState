import React, { useState } from "react";
function Counter() {
  const [Counter, setCounter] = useState(0);
  increament = () => {
    setCounter(Counter + 1);
  };
  reset = () => {
    setCounter(0);
  };
  decrement = () => {
    setCounter(Counter - 1);
  };
  return (
    <div className="container">
      <p className="counterText">{Counter}</p>
      <button className="Counter-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="Counter-btn">{reset}Reset</button>
      <button className="Counter-btn">{increament}Incrementt</button>
    </div>
  );
}
export default Counter;
