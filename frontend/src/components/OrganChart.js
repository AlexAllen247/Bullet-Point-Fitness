import React, { useState } from "react";
import Organs from "../images/HumanOrgansInk.png";
import OrganData from "../organs.json";

const OrganChart = () => {
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  const handleMouseEnter = (organName) => {
    setHoveredOrgan(organName);
  };

  const handleMouseLeave = () => {
    setHoveredOrgan(null);
  };

  const handleClick = (organName) => {
    setSelectedOrgan(organName);
  };

  const getPolygonStyle = (muscleName) => ({
    fill:
      hoveredOrgan === muscleName
        ? "rgba(255, 0, 0, 0.5)"
        : selectedOrgan === muscleName
        ? "rgba(255, 0, 0, 0.5)"
        : "rgba(0, 0, 0, 0)",
    stroke:
      hoveredOrgan === muscleName || selectedOrgan === muscleName
        ? "red"
        : "none",
  });

  const STYLES = {
    organMap: {
      position: "relative",
    },
    organImg: {
      width: "100%",
      height: "auto",
    },
    svg: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "auto",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section className="organ-map" style={STYLES.organMap}>
      <img
        src={Organs}
        alt="Human anatomy chart of organs"
        aria-label="Human anatomy chart of organs"
        style={STYLES.organImg}
      />
      <svg viewBox="0 0 1975 4867" style={STYLES.svg}>
        {Object.entries(OrganData.organList).map(([organName, organPolygons]) =>
          organPolygons.map((organ, index) => (
            <polygon
              onClick={(e) => {
                e.stopPropagation();
                handleClick(organName);
              }}
              key={`${organName}_${index}`}
              points={organ.coords}
              style={getPolygonStyle(organName)}
              onMouseEnter={() => handleMouseEnter(organName)}
              onMouseLeave={handleMouseLeave}
            />
          )),
        )}
      </svg>
      <div>{hoveredOrgan || selectedOrgan}</div>
    </section>
  );
};

export default OrganChart;
