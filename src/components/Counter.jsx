import { useState } from "react";
import { Container } from "./UI/Container";

export default function Counter() {
  const [counterState, setCounterState] = useState({
    counter: 0,
    counterSteps: 1,
    stepsOnOff: false,
  });

  const handleIncrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.stepsOnOff
          ? prevState.counter + prevState.counterSteps
          : prevState.counter + 1,
      };
    });
  };

  const handleDecrease = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.stepsOnOff
          ? prevState.counter - prevState.counterSteps
          : prevState.counter - 1,
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

  const handleStepsOnOff = () => {
    setCounterState((prevState) => {
      return {
        ...prevState,
        stepsOnOff: !prevState.stepsOnOff,
      };
    });
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold text-blue-600">Counter</h1>
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
      <div className="flex items-center">
        <button
          onClick={resetCounter}
          className="text-sm mx-1 py-1 px-2 bg-slate-600 rounded text-yellow-50"
        >
          Reset
        </button>
        <input
          type="checkbox"
          id="steps"
          className="form-checkbox h-5 w-5 text-blue-600 mx-2"
          onClick={handleStepsOnOff}
        />
        <label htmlFor="steps" className="text-lg">
          Counter steps
        </label>
      </div>
      {counterState.stepsOnOff && (
        <div className="flex items-center  m-5">
          <label htmlFor="counterSteps" className="text-lg text-gray-700 mr-4">
            Steps:
          </label>
          <input
            type="range"
            name="counterSteps"
            min="1"
            max="10"
            value={counterState.counterSteps}
            onChange={(event) => handleSteps(event)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
          />
          <span className="text-lg ml-4">{counterState.counterSteps}</span>
        </div>
      )}
    </Container>
  );
}
