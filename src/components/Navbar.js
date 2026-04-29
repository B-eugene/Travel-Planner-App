import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/modes" style={{ marginRight: "10px" }}>Travel Modes</Link>
      <Link to="/calculator" style={{ marginRight: "10px" }}>Calculator</Link>
      <Link to="/compare" style={{ marginRight: "10px" }}>Compare</Link>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/sustainability" style={{ marginRight: "10px" }}>Sustainability</Link>
    </nav>
  );
}

export default Navbar;