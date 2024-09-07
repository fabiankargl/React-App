import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [counterLimit, setCounterLimit] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
    setInputValue("")
  };

  const handleChange = (event) => {
    setCounterLimit(Number(event.target.value));
    setInputValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
        setInputValue("");
    }
  };

  return (
    <>
      <div className="container">
        <button
          onClick={handleDecrease}
          disabled={counter <= -counterLimit ? true : false}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          onClick={handleIncrease}
          disabled={counter >= counterLimit ? true : false}
        >
          +
        </button>
      </div>
      <div className="container">
        <button onClick={resetCounter}>Reset</button>
        <label htmlFor="text">Counter limit:</label>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => handleChange(event)}
          onKeyDown={handleEnterPress}
        />
      </div>
    </>
  );
}
