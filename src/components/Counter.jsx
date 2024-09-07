import { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState({
    counter: 0,
    counterLimit: 0,
    inputValue: "",
    counterSteps: 1,
  });

  const handleIncrease = () => {
    setCounterState((prevState) => {
      const { counter, counterSteps, counterLimit } = prevState;
      const newCounter =
        counter + counterSteps < counterLimit
          ? counter + counterSteps
          : counterLimit;
      return {
        ...prevState,
        counter: newCounter,
      };
    });
  };

  const handleDecrease = () => {
    setCounterState((prevState) => {
      const { counter, counterSteps, counterLimit } = prevState;
      const newCounter =
        counter - counterSteps > -counterLimit
          ? counter - counterSteps
          : -counterLimit;
      return {
        ...prevState,
        counter: newCounter,
      };
    });
  };

  const resetCounter = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: 0,
        counterLimit: 0,
      };
    });
  };

  const handleChange = (event) => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counterLimit: Number(event.target.value),
        inputValue: event.target.value,
      };
    });
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      setCounterState((prevState) => {
        return {
          ...prevState,
          inputValue: "",
        };
      });
    }
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
        <p>Current limit: {counterState.counterLimit}</p>
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
      </div>
      <div className="container">
        <button onClick={resetCounter}>Reset</button>
        <label htmlFor="counterLimit">Counter limit:</label>
        <input
          type="text"
          name="counterLimit"
          value={counterState.inputValue}
          onChange={(event) => handleChange(event)}
          onKeyDown={handleEnterPress}
        />
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
    </>
  );
}
