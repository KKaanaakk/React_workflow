import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <Link to="/upload">
        <h3>DragDrop</h3>
      </Link>
    </div>
  );
};

export default Navbar;
