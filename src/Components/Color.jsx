import React, { useState } from "react";

function Color() {
  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={() => setColor(color === "black" ? "red" : "black")}>
        Change Color
      </button>
      <h1 style={{ color: color }}>Color Change Project in React</h1>
    </div>
  );
}

export default Color;
