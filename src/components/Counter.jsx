import { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState({
    counter: 0,
    counterSteps: 1,
  });

  const handleIncrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + counterState.counterSteps,
      };
    });
  };

  const handleDecrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - counterState.counterSteps,
      };
    });
  };

  const resetCounter = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: 0,
      };
    });
  };

  const handleSteps = (event) => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counterSteps: Number(event.target.value),
      };
    });
  };

  return (
    <>
      <div className="container">
        <label htmlFor="counterSteps">Counter steps:</label>
        <input
          type="range"
          name="counterSteps"
          min="1"
          max="10"
          value={counterState.counterSteps}
          onChange={(event) => handleSteps(event)}
        ></input>
        {counterState.counterSteps}
      </div>
      <div className="container">
        <button
          onClick={handleDecrease}
          disabled={
            counterState.counter <= -counterState.counterLimit ? true : false
          }
        >
          -
        </button>
        <span>{counterState.counter}</span>
        <button
          onClick={handleIncrease}
          disabled={
            counterState.counter >= counterState.counterLimit ? true : false
          }
        >
          +
        </button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </>
  );
}
