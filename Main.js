import { useState, useEffect } from "react";

const Main = () => {
  const [count, setCount] = useState(0);
  const [windowsize, setWindowSize] = useState(window.innerWidth);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const handelwindowsize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handelwindowsize);
    console.log("hello i am from use Effect", count);

    return () => {
      window.removeEventListener("resize", handelwindowsize);
    };
  });

  return (
    <div>
      <button onClick={Decrement}>-</button>
      <h3>{count}</h3>
      <h3>{windowsize}</h3>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default Main;
