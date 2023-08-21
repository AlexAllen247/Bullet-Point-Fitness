import React, { useState, useEffect } from "react";
import Anatomy from "../images/Muscle.png";
import MuscleData from "../muscles.json";

const STYLES = {
  muscleMap: {
    position: "relative",
  },
  anatomyImg: {
    width: "100%",
    height: "auto",
  },
  svg: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "auto",
    maxWidth: "933px",
  },
};

const HumanAnatomy = () => {
  const [hoveredMuscle, setHoveredMuscle] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleMouseEnter = (muscleName) => {
    setHoveredMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setHoveredMuscle(null);
  };

  const handleClick = (muscleName) => {
    setSelectedMuscle(muscleName);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".muscle-map")) {
        setSelectedMuscle(null);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const getPolygonStyle = (muscleName) => ({
    fill:
      hoveredMuscle === muscleName
        ? "rgba(255, 0, 0, 0.5)"
        : selectedMuscle === muscleName
        ? "rgba(255, 0, 0, 0.5)"
        : "rgba(0, 0, 0, 0)",
    stroke:
      hoveredMuscle === muscleName || selectedMuscle === muscleName
        ? "red"
        : "none",
  });

  return (
    <section className="muscle-map" style={STYLES.muscleMap}>
      <img
        src={Anatomy}
        alt="Human anatomy"
        aria-label="Human anatomy"
        style={STYLES.anatomyImg}
      />
      <svg viewBox="0 0 373 331" style={STYLES.svg}>
        {Object.entries(MuscleData.muscleList).map(
          ([muscleName, musclePolygons]) =>
            musclePolygons.map((muscle, index) => (
              <polygon
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(muscleName);
                }}
                key={`${muscleName}_${index}`}
                points={muscle.coords}
                style={getPolygonStyle(muscleName)}
                onMouseEnter={() => handleMouseEnter(muscleName)}
                onMouseLeave={handleMouseLeave}
              />
            )),
        )}
      </svg>
      <div>{hoveredMuscle || selectedMuscle}</div>
    </section>
  );
};

export default HumanAnatomy;
