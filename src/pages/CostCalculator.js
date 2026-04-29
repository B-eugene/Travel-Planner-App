import React, { useState, useEffect } from "react";

function CostCalculator() {
  const [distance, setDistance] = useState("");
  const [mode, setMode] = useState("bus");
  const [cost, setCost] = useState(null);

  // Load saved data when page loads
  useEffect(() => {
    const savedDistance = localStorage.getItem("distance");
    const savedMode = localStorage.getItem("mode");

    if (savedDistance) setDistance(savedDistance);
    if (savedMode) setMode(savedMode);
  }, []);

  const calculateCost = () => {
    let pricePerKm = 0;

    if (mode === "bus") pricePerKm = 1;
    if (mode === "rail") pricePerKm = 2;
    if (mode === "cycling") pricePerKm = 0.2;
    if (mode === "walking") pricePerKm = 0;

    const total = distance * pricePerKm;
    setCost(total);

    // Save to local storage
    localStorage.setItem("distance", distance);
    localStorage.setItem("mode", mode);
  };

  return (
    <div>
      <h1>Cost Calculator</h1>

      <input
        type="number"
        placeholder="Enter distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <br /><br />

      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="bus">Bus</option>
        <option value="rail">Rail</option>
        <option value="cycling">Cycling</option>
        <option value="walking">Walking</option>
      </select>

      <br /><br />

      <button onClick={calculateCost}>Calculate</button>

      {cost !== null && (
        <p>Estimated Cost: £{cost}</p>
      )}
    </div>
  );
}

export default CostCalculator;