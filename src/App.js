App.js;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./styles.css";

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <header>
      <p className="logo">Veejay</p>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationButtons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
