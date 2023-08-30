import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const VideoGallery = ({ displayedMuscleFunctionVideos, trainingVideos }) => (
  <div className="album py-5 bg-light">
    <Container>
      <Row>
        {displayedMuscleFunctionVideos.map((video) => (
          <Col key={video.id} md={4}>
            <VideoCard video={video} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container>
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

export default VideoGallery;
