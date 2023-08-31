import React from "react";
import { Card, Ratio } from "react-bootstrap";

const VideoCard = ({ video }) => {
  const styles = {
    card: {
      width: "18rem",
    },
  };
  return (
    <Card className="mb-4 box-shadow" border="danger" style={styles.card}>
      <Ratio aspectRatio="1x1">
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
        <Card.Text>{video.description}</Card.Text>
        <Card.Footer>
          <small className="text-muted">{video.duration}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
