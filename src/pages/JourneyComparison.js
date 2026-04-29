import React, { useState } from "react";

function JourneyComparison() {
  const [mode1, setMode1] = useState("bus");
  const [mode2, setMode2] = useState("rail");

  const getInfo = (mode) => {
    if (mode === "bus") return { cost: 1, time: 30 };
    if (mode === "rail") return { cost: 2, time: 15 };
    if (mode === "cycling") return { cost: 0.2, time: 25 };
    if (mode === "walking") return { cost: 0, time: 60 };
  };

  const info1 = getInfo(mode1);
  const info2 = getInfo(mode2);

  return (
    <div>
      <h1>Journey Comparison</h1>

      <select onChange={(e) => setMode1(e.target.value)}>
        <option value="bus">Bus</option>
        <option value="rail">Rail</option>
        <option value="cycling">Cycling</option>
        <option value="walking">Walking</option>
      </select>

      <select onChange={(e) => setMode2(e.target.value)}>
        <option value="bus">Bus</option>
        <option value="rail">Rail</option>
        <option value="cycling">Cycling</option>
        <option value="walking">Walking</option>
      </select>

      <h2>Comparison</h2>

      <p>{mode1} → Cost: £{info1.cost}, Time: {info1.time} mins</p>
      <p>{mode2} → Cost: £{info2.cost}, Time: {info2.time} mins</p>
    </div>
  );
}

export default JourneyComparison;