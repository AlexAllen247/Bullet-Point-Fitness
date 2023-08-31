import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoGallery = ({
  displayedMuscleFunctionVideos,
  trainingVideos,
  hoveredMuscle,
  selectedMuscle,
}) => {
  return (
    <div className="album py-5">
      <Container>
        <h1>{hoveredMuscle || selectedMuscle}</h1>
        <Row>
          {displayedMuscleFunctionVideos.map((video) => (
            <Col key={video.id} md={4}>
              <VideoCard video={video} />
            </Col>
          ))}
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
};

export default VideoGallery;
