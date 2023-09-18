import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoGallery = forwardRef((props, ref) => {
  const {
    displayedMuscleFunctionVideos,
    displayedExerciseVideos,
    trainingVideos,
    hoveredMuscle,
    selectedMuscle,
  } = props;
  return (
    <div ref={ref} className="album py-5">
      <Container>
        <h1>{hoveredMuscle || selectedMuscle}</h1>
        <Row>
          {displayedMuscleFunctionVideos.length > 0 && (
            <Col md={6}>
              <h2>Muscle Functions</h2>
              <Row>
                {displayedMuscleFunctionVideos.map((video) => (
                  <Col key={video.id} md={12}>
                    <VideoCard video={video} />
                  </Col>
                ))}
              </Row>
            </Col>
          )}
          {displayedExerciseVideos.length > 0 && (
            <Col md={6}>
              <h2>Exercises</h2>
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
      <Container>
        <h1>Training Videos</h1>
        <Row>
          {trainingVideos.map((video) => (
            <Col key={video.id} md={4}>
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
});

export default VideoGallery;
