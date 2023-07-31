import React, { useState } from "react";
import Anatomy from "../images/Muscle.png";

const TrialSvg = () => {
  const muscles = [
    {
      name: "Hip Adductors",
      shape: "polygon",
      coords:
        "274,173,278,178,281,179,284,179,282,188,281,197,281,205,282,214,278,199,276,194,275,190,274,184,274,179",
    },
    {
      name: "Hip Adductors",
      shape: "polygon",
      coords:
        "260, 180, 266, 177, 270, 173, 270, 181, 269, 186, 267, 193, 259, 214, 262, 195",
    },
    {
      name: "Erector Spinae",
      shape: "polygon",
      coords:
        "284, 119, 285, 126, 285, 132, 260, 132, 259, 126, 260, 122, 261, 118, 264, 112, 266, 108, 279, 108",
    },
    {
      name: "Lats",
      shape: "polygon",
      coords: "127, 78, 125, 86, 125, 95, 125, 106, 127, 100, 128, 93, 128, 82",
    },
    {
      name: "Lats",
      shape: "polygon",
      coords: "73, 78, 76, 86, 76, 106, 74, 101, 73, 95",
    },
    {
      name: "Lats",
      shape: "polygon",
      coords:
        "303, 82, 302, 90, 301, 98, 297, 112, 294, 119, 288, 129, 283, 115, 275, 101, 277, 96, 279, 90, 284, 81, 288, 82, 292, 83, 300, 82, 302, 81",
    },
    {
      name: "Lats",
      shape: "polygon",
      coords:
        "242, 81, 246, 83, 250, 83, 255, 82, 260, 82, 266, 91, 270, 102, 266, 108, 262, 115, 257, 131, 251, 120, 248, 112, 246, 105, 243, 97, 243, 94, 242, 90",
    },
    {
      name: "Teres",
      shape: "polygon",
      coords: "302, 66, 304, 67, 303, 81, 295, 83, 287, 81, 296, 75",
    },
    {
      name: "Teres",
      shape: "polygon",
      coords:
        "242, 66, 241, 67, 242, 81, 245, 82, 249, 83, 258, 81, 247, 73, 245, 69",
    },
    {
      name: "Infraspinatus",
      shape: "polygon",
      coords:
        "291, 60, 289, 61, 287, 65, 286, 72, 285, 79, 287, 81, 296, 75, 302, 65, 292, 60",
    },
    {
      name: "Infraspinatus",
      shape: "polygon",
      coords:
        "253, 59, 255, 60, 257, 65, 258, 73, 260, 81, 258, 81, 247, 73, 245, 69, 242, 66",
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

export default TrialSvg;
