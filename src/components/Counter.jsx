import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => setCount(count => count + 1);
  const handleDecrementCount = () => setCount(count => count - 1);

  return (
    <div className="flex gap-4 items-center text-lg border-2 p-8 border-purple-300 rounded-md">
      <button
        className="py-2 px-4 bg-purple-300 rounded-md text-purple-800 font-bold"
        onClick={handleDecrementCount}
      >
        -
      </button>
      <div className="font-medium">{count}</div>
      <button
        className="py-2 px-4 bg-purple-300 rounded-md text-purple-800 font-bold"
        onClick={handleIncrementCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
