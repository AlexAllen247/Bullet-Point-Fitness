import React from "react";
import { Card, Ratio } from "react-bootstrap";

const VideoCard = ({ video }) => {
  const styles = {
    text: {
      color: "#df0000",
      borderWidth: "2px",
    },
    description: {
      maxWidth: "800px",
      margin: "auto",
      padding: 10,
    },
    header: {
      textDecoration: "underline",
    },
  };
  return (
    <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
      <Ratio aspectRatio="16x9">
        <iframe
          title={video.title}
          src={video.embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          allowFullScreen
          loading="lazy"
        />
      </Ratio>
      <Card.Body>
        <Card.Title style={styles.header}>{video.title}</Card.Title>
        <Card.Text style={styles.description}>{video.description}</Card.Text>
        <Card.Footer>
          <small>{video.duration}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
