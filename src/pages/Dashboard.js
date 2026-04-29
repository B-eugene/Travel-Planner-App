import React, { useEffect, useState } from "react";

function Dashboard() {
  const [distance, setDistance] = useState(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const savedDistance = localStorage.getItem("distance");
    const savedMode = localStorage.getItem("mode");

    setDistance(savedDistance);
    setMode(savedMode);
  }, []);

  return (
    <div>
      <h1>Your Travel Dashboard</h1>

      {distance && mode ? (
        <div>
          <p>Last Distance: {distance} km</p>
          <p>Preferred Mode: {mode}</p>
        </div>
      ) : (
        <p>No saved data yet. Use the calculator first.</p>
      )}
    </div>
  );
}

export default Dashboard;