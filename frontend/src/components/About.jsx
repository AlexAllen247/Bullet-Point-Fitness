import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Image1 from "../images/Level2FirstAid.jpg";
import Image2 from "../images/Level2Fitness.jpg";
import Image3 from "../images/Level3PT.jpg";
import Image4 from "../images/Level3PT1.jpg";
import Image5 from "../images/Level3PTDiploma.jpg";
import Image6 from "../images/Level3PTDiploma.jpg";
import Image7 from "../images/Level3ExerciseReferral.jpg";
import Image8 from "../images/Level4ObesityAndDiabetes.jpg";
import aboutVideoService from "../services/aboutVideos";
import VideoCard from "./VideoCard";
import SEO from "./SEO";

const About = () => {
  const [aboutVideos, setAboutVideos] = useState([]);

  useEffect(() => {
    const fetchTrainingVideos = async () => {
      const videos = await aboutVideoService.get();
      setAboutVideos(videos);
    };
    fetchTrainingVideos();
  }, []);

  const fitnessCertifications = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  const styles = {
    container: {
      textAlign: "center",
    },
    card: {
      color: "#df0000",
      borderWidth: "2px",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
    },
    fitHeader: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      margin: 60,
    },
  };

  return (
    <section style={styles.container}>
      <SEO
        title="About Us | Bullet Point Fitness"
        description="Learn more about Bullet Point Fitness, our mission, and how we strive to help individuals achieve their fitness goals efficiently."
        keywords="about us, mission, fitness goals, company information, Bullet Point Fitness"
        canonicalUrl="https://bulletpointfitness.com/about"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <Container>
        <div>
          <h1 style={styles.header}>About</h1>
        </div>
        {aboutVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        <div>
          <h1 style={styles.fitHeader}>Fitness Certifications</h1>
        </div>
        {fitnessCertifications.map((image, index) => {
          if (index % 2 === 0) {
            return (
              <Row key={index}>
                <Col md={6}>
                  <a href={fitnessCertifications[index]}>
                    <Card className="my-3" style={styles.card}>
                      <Card.Img
                        variant="top"
                        src={fitnessCertifications[index]}
                        loading="lazy"
                        alt={`Fitness Certification ${index}`}
                      />
                    </Card>
                  </a>
                </Col>
                {fitnessCertifications[index + 1] && (
                  <Col md={6}>
                    <a href={fitnessCertifications[index + 1]}>
                      <Card className="my-3" style={styles.card}>
                        <Card.Img
                          variant="top"
                          src={fitnessCertifications[index + 1]}
                          loading="lazy"
                          alt={`Fitness Certification ${index + 1}`}
                        />
                      </Card>
                    </a>
                  </Col>
                )}
              </Row>
            );
          }
          return null;
        })}
      </Container>
    </section>
  );
};

export default About;
