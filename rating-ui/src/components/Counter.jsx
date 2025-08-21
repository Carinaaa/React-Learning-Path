import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    console.log("Init count state...");
    return 0;
  });
  const increment = () => {
    setCounter((prevCount) => {
      console.log(prevCount);
      return counter + 1;
    });
  };
  return (
    <>
      <h2>Count: {counter}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
