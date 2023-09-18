import React, { useState, useEffect } from "react";
import trainingVideoService from "../services/trainingVideos";
import { Container, Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";

const TrainingVideos = () => {
  const [trainingVideos, setTrainingVideos] = useState([]);

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await trainingVideoService.get();
      setTrainingVideos(videos);
    };
    fetchTrainingVideos();
  }, []);

  const styles = {
    trainingVideos: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
  };

  return (
    <section className="album py-5" style={styles.trainingVideos}>
      <Container>
        <h1 style={styles.header}>Training Videos</h1>
        <Row>
          {trainingVideos.map((video) => (
            <Col key={video.id} md={4}>
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TrainingVideos;
