import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoGallery = forwardRef((props, ref) => {
  const {
    displayedMuscleFunctionVideos,
    displayedExerciseVideos,
    hoveredMuscle,
    selectedMuscle,
  } = props;

  const styles = {
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
  };

  return (
    <div ref={ref} className="album py-5">
      <Container>
        <h1 style={styles.header}>{hoveredMuscle || selectedMuscle}</h1>
        <Row>
          {displayedMuscleFunctionVideos.length > 0 && (
            <Col>
              <h2 style={styles.header}>Muscle Functions</h2>
              <Row>
                {displayedMuscleFunctionVideos.map((video) => (
                  <Col key={video.id} md={12}>
                    <VideoCard video={video} />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Row>
        <Row>
          {displayedExerciseVideos.length > 0 && (
            <Col>
              <h2 style={styles.header}>Exercises</h2>
              <Row>
                {displayedExerciseVideos.map((video) => (
                  <Col key={video.id} md={12}>
                    <VideoCard video={video} />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
});

export default VideoGallery;
