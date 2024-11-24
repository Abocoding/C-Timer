import React, { useState } from "react";
import Timer from "./components/Timer";
import SavedTimers from "./components/SavedTimers";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <header className="p-4 text-center">
        <h1 className="text-2xl font-bold">Countdown Timer App</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </header>
      <main className="p-4">
        <Timer />
        <SavedTimers />
      </main>
    </div>
  );
}

export default App;
