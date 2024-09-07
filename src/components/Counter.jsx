import { useState } from "react";

export default function Counter() {
  const [counterState, setCounterState] = useState({
    counter: 0,
    counterLimit: 0,
    inputValue: "",
  });

  const handleIncrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  };

  const handleDecrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 1,
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
  console.log(counterState);

  return (
    <>
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
        <label htmlFor="text">Counter limit:</label>
        <input
          type="text"
          value={counterState.inputValue}
          onChange={(event) => handleChange(event)}
          onKeyDown={handleEnterPress}
        />
      </div>
    </>
  );
}
