import React, { useState } from "react";
import Anatomy from "../images/Muscle3.png";
import MuscleData from "../muscles.json";

const HumanAnatomy = () => {
  const [activeMuscle, setActiveMuscle] = useState(null);

  const handleMouseEnter = (muscleName) => {
    setActiveMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setActiveMuscle(null);
  };

  const handleClick = (muscleName) => {
    setActiveMuscle(muscleName);
  };

  const originalWidth = 373;
  const originalHeight = 331;
  const largerWidth = 933;
  const largerHeight = 827;
  const widthScalingFactor = largerWidth / originalWidth;
  const heightScalingFactor = largerHeight / originalHeight;

  return (
    <section className="muscle-map" style={{ position: "relative" }}>
      <img src={Anatomy} alt="Human anatomy" aria-label="Human anatomy" />
      <svg
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        {Object.entries(MuscleData.muscleList).map(
          ([muscleName, musclePolygons]) =>
            musclePolygons.map((muscle, index) => {
              const adjustedCoords = muscle.coords
                .split(",")
                .map((coord, index) => {
                  if (index % 2 === 0) {
                    return coord * widthScalingFactor;
                  } else {
                    return coord * heightScalingFactor;
                  }
                })
                .join(",");

              return (
                <polygon
                  onClick={() => handleClick(muscleName)}
                  key={`${muscleName}_${index}`}
                  points={adjustedCoords}
                  style={{
                    fill:
                      activeMuscle === muscleName
                        ? "rgba(255, 0, 0, 0.5)"
                        : "rgba(0, 0, 0, 0)",
                    stroke: activeMuscle === muscleName ? "red" : "none",
                  }}
                  onMouseEnter={() => handleMouseEnter(muscleName)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            }),
        )}
      </svg>
      <div>{activeMuscle}</div>
    </section>
  );
};

export default HumanAnatomy;
