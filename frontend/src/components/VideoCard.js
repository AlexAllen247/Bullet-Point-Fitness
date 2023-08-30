import React from "react";
import { Card, Ratio } from "react-bootstrap";

const VideoCard = ({ video }) => (
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
);

export default VideoCard;
