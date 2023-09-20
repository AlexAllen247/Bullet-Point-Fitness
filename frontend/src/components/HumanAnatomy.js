import React, { useState, useEffect, useRef } from "react";
import Anatomy from "../images/Muscle.png";
import MuscleData from "../muscles.json";
import muscleFunctionVideoService from "../services/muscleFunctionVideos";
import exerciseVideoService from "../services/exerciseVideos";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoGallery from "./VideoGallery";

const HumanAnatomy = () => {
  const [hoveredMuscle, setHoveredMuscle] = useState(null);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [muscleFunctionVideos, setMuscleFunctionVideos] = useState([]);
  const [displayedMuscleFunctionVideos, setDisplayedMuscleFunctionVideos] =
    useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [displayedExerciseVideos, setDisplayedExerciseVideos] = useState([]);
  const videoSectionRef = useRef(null);

  useEffect(() => {
    const fetchMuscleFunctionVideos = async () => {
      const videos = await muscleFunctionVideoService.get();
      setMuscleFunctionVideos(videos);
    };
    fetchMuscleFunctionVideos();
  }, []);

  useEffect(() => {
    const fetchExerciseVideos = async () => {
      const videos = await exerciseVideoService.get();
      setExerciseVideos(videos);
    };
    fetchExerciseVideos();
  }, []);

  const handleMouseEnter = (muscleName) => {
    setHoveredMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setHoveredMuscle(null);
  };

  const handleClick = (muscleName) => {
    setSelectedMuscle(muscleName);
    const relevantMuscleFunctionVideos = muscleFunctionVideos.filter(
      (video) => video.muscleName === muscleName,
    );
    setDisplayedMuscleFunctionVideos(relevantMuscleFunctionVideos);
    const relevantExereciseVideos = exerciseVideos.filter(
      (video) => video.muscleName === muscleName,
    );
    setDisplayedExerciseVideos(relevantExereciseVideos);
    videoSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
      transition: "all 0.3s ease",
    },
  };

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
      <VideoGallery
        ref={videoSectionRef}
        displayedMuscleFunctionVideos={displayedMuscleFunctionVideos}
        displayedExerciseVideos={displayedExerciseVideos}
        hoveredMuscle={hoveredMuscle}
        selectedMuscle={selectedMuscle}
      />
    </section>
  );
};

export default HumanAnatomy;
