import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const incrementBy = (value: number): void => {
    setCount(count + value);
  };

  return {
    incrementBy,
    count,
  };
};
