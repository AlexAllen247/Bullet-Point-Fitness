import React, { useState, useEffect } from "react";
import Anatomy from "../images/Muscle.png";
import MuscleData from "../muscles.json";
import trainingVideoService from "../services/trainingVideos";
import muscleFunctionVideoService from "../services/muscleFunctionVideos";
import { Card, Ratio, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [muscleFunctionVideos, setMuscleFunctionVideos] = useState([]);
  const [displayedMuscleFunctionVideos, setDisplayedMuscleFunctionVideos] =
    useState([]);
  const [trainingVideos, setTrainingVideos] = useState([]);

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await trainingVideoService.get();
      setTrainingVideos(videos);
    };
    fetchTrainingVideos();
  }, []);

  useEffect(() => {
    const fetchMuscleFunctionVideos = async () => {
      const videos = await muscleFunctionVideoService.get();
      setMuscleFunctionVideos(videos);
    };
    fetchMuscleFunctionVideos();
  }, []);

  const handleMouseEnter = (muscleName) => {
    setHoveredMuscle(muscleName);
  };

  const handleMouseLeave = () => {
    setHoveredMuscle(null);
  };

  const handleClick = (muscleName) => {
    setSelectedMuscle(muscleName);
    const relevantVideos = muscleFunctionVideos.filter(
      (video) => video.muscleName === muscleName,
    );
    setDisplayedMuscleFunctionVideos(relevantVideos);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".muscle-map")) {
        setSelectedMuscle(null);
        setDisplayedMuscleFunctionVideos([]);
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
      <div className="album py-5 bg-light">
        <Container>
          <Row>
            {displayedMuscleFunctionVideos.map((video) => (
              <Col key={video.id} md={4}>
                <Card className="mb-4 box-shadow">
                  <Ratio aspectRatio="16x9">
                    <Card.Img
                      as="iframe"
                      title={video.title}
                      src={video.embedUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Ratio>
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container>
          <Row>
            {trainingVideos.map((video) => (
              <Col key={video.id} md={4}>
                <Card className="mb-4 box-shadow">
                  <Ratio aspectRatio="16x9">
                    <Card.Img
                      as="iframe"
                      title={video.title}
                      src={video.embedUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Ratio>
                  <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HumanAnatomy;
