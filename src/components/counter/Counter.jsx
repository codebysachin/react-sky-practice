import React from "react";
import { useState } from "react";

function Counter() {
  // create a state and initialise with 0
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    return setCount(count + 1);
  };
  return (
    <>
      <p> Count {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
