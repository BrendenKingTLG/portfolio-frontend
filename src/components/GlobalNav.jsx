import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GlobalNav() {
  let navInvis = true;

  const toggleNav = () => {
    if (document.getElementById("navbarNav") !== null && navInvis) {
      document.getElementById("navbarNav").style.display = "block";
      console.log("yo");
      navInvis = false;
    } else if (document.getElementById("navbarNav") !== null && !navInvis) {
      document.getElementById("navbarNav").style.display = "none";
      console.log("yo1");
      navInvis = true;
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="globalnav"
    >
      <button
        onClick={() => toggleNav()}
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/order">
              Order
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/staff">
              Staff
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/log">
              Log
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
