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
    <div className="flex flex-col items-center bg-slate-300 m-4 rounded-3xl p-4 w-1/2 mx-auto">
      <h1 className="text-2xl font-bold text-blue-600">Counter</h1>
      <div className="flex flex-col items-center my-5">
        <label htmlFor="counterSteps" className="text-sm mb-2">
          Counter steps:
        </label>
        <input
          type="range"
          name="counterSteps"
          min="1"
          max="10"
          value={counterState.counterSteps}
          onChange={(event) => handleSteps(event)}
          className=" my-2"
        />
      </div>
      <div className="flex items-center justify-center my-5">
        <button
          onClick={handleDecrease}
          disabled={counterState.counter <= -counterState.counterLimit}
          className="text-sm px-2 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          -
        </button>
        <span className="text-2xl mx-1">{counterState.counter}</span>
        <button
          onClick={handleIncrease}
          disabled={counterState.counter >= counterState.counterLimit}
          className="text-sm px-2 py-1 mx-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          +
        </button>
      </div>
      <div className="flex items-center flex-col">
        <button
          onClick={resetCounter}
          className="text-sm mx-1 py-1 px-2 bg-slate-600 rounded text-yellow-50"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
