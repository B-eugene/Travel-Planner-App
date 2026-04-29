import React, { useState } from "react";

function Sustainability() {
  const [distance, setDistance] = useState("");
  const [result, setResult] = useState(null);

  const calculateCarbon = () => {
    const bus = distance * 0.1;
    const rail = distance * 0.05;
    const cycling = 0;
    const walking = 0;

    setResult({
      bus,
      rail,
      cycling,
      walking
    });
  };

  return (
    <div>
      <h1>Sustainability Tracker</h1>

      <input
        type="number"
        placeholder="Enter distance (km)"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateCarbon}>Calculate Emissions</button>

      {result && (
        <div>
          <h2>Carbon Emissions (kg CO₂)</h2>
          <p>Bus: {result.bus}</p>
          <p>Rail: {result.rail}</p>
          <p>Cycling: {result.cycling}</p>
          <p>Walking: {result.walking}</p>
        </div>
      )}
    </div>
  );
}

export default Sustainability;