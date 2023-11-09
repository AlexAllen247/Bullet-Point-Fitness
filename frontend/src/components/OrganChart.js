import React, { useState, useEffect, useRef } from "react";
import Organs from "../images/AllHumanOrgansInk.png";
import OrganData from "../organs.json";
import organService from "../services/organs";
import OrganCard from "./OrganCard";

const OrganChart = () => {
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [organ, setOrgan] = useState([]);
  const organInfoSectionRef = useRef(null);

  useEffect(() => {
    const fetchOrgans = async () => {
      const organs = await organService.get();
      setOrgan(organs);
    };
    fetchOrgans();
  }, []);

  const handleMouseEnter = (organName) => {
    setHoveredOrgan(organName);
  };

  const handleMouseLeave = () => {
    setHoveredOrgan(null);
  };

  const handleClick = (organName) => {
    setSelectedOrgan(organName);
    const relevantOrgans = organ.filter((data) => data.organName === organName);
    setOrgan(relevantOrgans);
    organInfoSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getPolygonStyle = (organName) => ({
    fill:
      hoveredOrgan === organName
        ? "rgba(0, 255, 0, 0.5)"
        : selectedOrgan === organName
        ? "rgba(0, 255, 0, 0.5)"
        : "rgba(0, 0, 0, 0)",
    stroke:
      hoveredOrgan === organName || selectedOrgan === organName
        ? "green"
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
      <OrganCard
        ref={organInfoSectionRef}
        organ={organ}
        selectedOrgan={selectedOrgan}
      />
    </section>
  );
};

export default OrganChart;
