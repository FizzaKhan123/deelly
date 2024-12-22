import React, { useState, useEffect } from 'react';

interface CounterProps{
  count:number;
}

const Counter = ({count}:CounterProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 2000); // Updates every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-4xl-tight">Counter: {counter} +</p>
    </div>
  );
};

export default Counter;
