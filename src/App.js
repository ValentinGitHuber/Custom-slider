import React, { useState } from "react";
import ReactSlider from "react-slider";
import "./App.css";

export default () => {
  const def = 50;
  const [nr, setnr] = useState(def);

  const move = data => setnr(data);

  return (
    <div style={{ padding: "200px" }}>
      <h1>{nr}</h1>
      <div style={{ maxWidth: "500px" }}>
        <ReactSlider
          defaultValue={def}
          withBars
          onChange={move}
          onSliderClick={move}
        />
      </div>
    </div>
  );
};
