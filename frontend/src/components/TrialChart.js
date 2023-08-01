import React, { useState } from "react";
import Anatomy from "../images/Muscle3.png";

const TrialChart = () => {
  const muscles = [
    {
      name: "Hip Adductors",
      shape: "polygon",
      coords:
        "685, 432.5, 695, 445, 702.5, 447.5, 710, 447.5, 705, 470, 702.5, 492.5, 702.5, 512.5, 705, 535, 695, 497.5, 690, 485, 687.5, 475, 685, 460, 685, 447.5",
    },
    {
      name: "Hip Adductors",
      shape: "polygon",
      coords:
        "260, 180, 266, 177, 270, 173, 270, 181, 269, 186, 267, 193, 259, 214, 262, 195",
    },
  ];
  const [activeMuscle, setActiveMuscle] = useState(null);

  const handleMouseEnter = (muscleName) => {
    setActiveMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setActiveMuscle(null);
  };

  const handleClick = () => {
    setActiveMuscle();
  };

  return (
    <section className="muscle-map" style={{ position: "relative" }}>
      <img src={Anatomy} alt="Human anatomy" useMap="#muscle-map" />
      <svg
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        {muscles.map((muscle) => (
          <polygon
            onClick={() => handleClick()}
            key={muscle.name}
            points={muscle.coords}
            style={{
              fill:
                activeMuscle === muscle.name
                  ? "rgba(255, 0, 0, 0.5)"
                  : "rgba(0, 0, 0, 0)",
              stroke: activeMuscle === muscle.name ? "red" : "none",
            }}
            onMouseEnter={() => handleMouseEnter(muscle.name)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </svg>
    </section>
  );
};

export default TrialChart;
