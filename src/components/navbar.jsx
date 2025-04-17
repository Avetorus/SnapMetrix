import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <a
            href="https://caloriesmonkey.streamlit.app" // Replace with your external link
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // Security measure for opening external links
            className="logo"
          >
            SnapMatrix
          </a>

        <div className="nav-links">
          <a
            href="https://caloriesmonkey.streamlit.app/Analyze" // Replace with your external link
            target="_blank" // This will open the link in a new tab
            rel="noopener noreferrer" // Security measure for opening external links
            className="nav-link"
          >
            Analysis
          </a>

          <button className="toggle-button" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
