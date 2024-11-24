import React, { useState } from "react";

function SavedTimers() {
  const [timers, setTimers] = useState(JSON.parse(localStorage.getItem("timers")) || []);
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");

  const saveTimer = () => {
    const newTimer = { name, duration: parseInt(duration) };
    const updatedTimers = [...timers, newTimer];
    setTimers(updatedTimers);
    localStorage.setItem("timers", JSON.stringify(updatedTimers));
  };

  const deleteTimer = (index) => {
    const updatedTimers = timers.filter((_, i) => i !== index);
    setTimers(updatedTimers);
    localStorage.setItem("timers", JSON.stringify(updatedTimers));
  };

  return (
    <div className="my-4">
      <h2 className="text-xl">Saved Timers</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Duration (s)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="input ml-2"
        />
        <button className="btn ml-2" onClick={saveTimer}>
          Save Timer
        </button>
      </div>
      <ul className="mt-4">
        {timers.map((timer, index) => (
          <li key={index} className="my-2">
            {timer.name}: {timer.duration}s{" "}
            <button className="btn ml-2" onClick={() => deleteTimer(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedTimers;
