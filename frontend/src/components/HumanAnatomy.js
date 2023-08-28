import React, { useState, useEffect } from "react";
import Anatomy from "../images/Muscle.png";
import MuscleData from "../muscles.json";
import trainingVideoService from "../services/trainingVideos";

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
    transition: "all 0.3s ease",
  },
};

const HumanAnatomy = () => {
  const [hoveredMuscle, setHoveredMuscle] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [trainingVideos, setTrainingVideos] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await trainingVideoService.get();
      setTrainingVideos(videos);
    };

    fetchTrainingVideos();
  }, []);

  const handleMouseEnter = (muscleName) => {
    setHoveredMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setHoveredMuscle(null);
  };

  const handleClick = (muscleName) => {
    setSelectedMuscle(muscleName);
    const relevantVideos = trainingVideos.filter(
      (video) => video.muscleName === muscleName,
    );
    setDisplayedVideos(relevantVideos);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".muscle-map")) {
        setSelectedMuscle(null);
        setDisplayedVideos([]);
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
      <div className="video-list">
        {displayedVideos.map((video) => (
          <div key={video.id}>
            <iframe
              title={video.title}
              width="560"
              height="315"
              src={video.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HumanAnatomy;
