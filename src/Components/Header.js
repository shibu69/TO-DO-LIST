import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>Set Your Daily Goals</nav>

      <div className="navabar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user">User</Link>
      </div>
    </>
  );
}
