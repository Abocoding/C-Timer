import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(60); // Default 1 minute
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && time > 0) {
      const timerId = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
      return () => clearInterval(timerId);
    }
    if (time === 0) {
      setIsRunning(false);
      alert("Time's up!");
    }
  }, [isRunning, time]);

  const handleReset = () => {
    setTime(60);
    setIsRunning(false);
  };

  return (
    <div className="my-4 p-4 border rounded">
      <h2 className="text-xl">Timer</h2>
      <div className="text-3xl my-2">{time}s</div>
      <button className="btn" onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button className="btn ml-2" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
