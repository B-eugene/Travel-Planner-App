import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CostCalculator from "./pages/CostCalculator";
import JourneyComparison from "./pages/JourneyComparison";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import TravelModes from "./pages/TravelModes";
import Navbar from "./components/Navbar";
import Sustainability from "./pages/Sustainability";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modes" element={<TravelModes />} />
        <Route path="/calculator" element={<CostCalculator />} />
        <Route path="/compare" element={<JourneyComparison />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
    </Router>
  );
}

export default App;
