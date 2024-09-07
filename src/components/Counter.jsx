import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="container">
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="container">
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
}
