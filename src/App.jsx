import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter+1);
  };

  const handleDecrease = () => {
    setCounter(counter-1);
  }
  return (
    <>
      <div className="container">
        <button onClick={handleDecrease}>-</button>
        <span>{counter}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
    </>
  );
}

export default App;
