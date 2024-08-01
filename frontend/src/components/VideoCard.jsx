import React, { useState, useEffect, useRef } from "react";
import { Card, Ratio } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const VideoCard = ({ video }) => {
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Card className="mb-4 box-shadow" border="danger" style={styles.text}>
      <Ratio aspectRatio="16x9">
        <iframe
          ref={iframeRef}
          title={video.title}
          src={isInView ? video.embedUrl : ""}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </Ratio>
      <Card.Body>
        <Card.Title style={styles.header}>{video.title}</Card.Title>
        <Card.Text style={styles.description}>
          <BulletPointSVG />
          {video.description}
        </Card.Text>
        <Card.Footer>
          <small>{video.duration}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
