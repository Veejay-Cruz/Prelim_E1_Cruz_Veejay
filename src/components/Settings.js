import React, { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <section className="Settings">
      <h2>Settings</h2>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
      <span className="toggle-label">Dark Mode</span>
    </section>
  );
}

export default Settings;
