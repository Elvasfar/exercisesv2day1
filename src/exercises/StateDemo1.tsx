import { BaseProps } from "../types";
import { useState, useEffect } from "react";

export default function StateDemo1({ title }: BaseProps) {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("count");
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => {
        setCount(prev => prev + 1);
      }}>Increment</button>
      <button onClick={() => {
        setCount(prev => prev - 1);
      }}>Decrement</button>
      <h3>{count}</h3>
    </>
  );
}
