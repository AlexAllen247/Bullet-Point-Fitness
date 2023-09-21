import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import Image1 from "../images/Level2FirstAid.jpg";
import Image2 from "../images/Level2Fitness.jpg";
import Image3 from "../images/Level3PT.jpg";
import Image4 from "../images/Level3PT1.jpg";
import Image5 from "../images/Level3PTDiploma.jpg";
import Image6 from "../images/Level3PTDiploma.jpg";
import Image7 from "../images/Level3ExerciseReferral.jpg";
import Image8 from "../images/Level4ObesityAndDiabetes.jpg";
import ProfilePicture from "../images/ProfilePicture.JPG";

const About = () => {
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
    cardStyle: {
      textAlign: "center",
      color: "#df0000",
      borderWidth: "2px",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
    },
    image: {
      width: "40%",
      height: "40%",
      objectFit: "contain",
      marginBottom: 20,
    },
    paragraph: {
      marginBottom: "1rem",
      fontSize: 20,
    },
  };

  return (
    <Container>
      <Card className="my-3" style={styles.cardStyle} border="danger">
        <Card.Header>
          <h2 style={styles.header}>Alex Allen</h2>
        </Card.Header>
        <Card.Body>
          <div>
            <img
              src={ProfilePicture}
              alt="profile"
              aria-label="Profile picture"
              style={styles.image}
            />
          </div>
          <div>
            <p style={styles.paragraph}>
              Hi, I'm Alex, Full Stack Developer and TeckBuff.
            </p>
            <p style={styles.paragraph}>
              Why TeckBuff? That's what my friends and family call me.
            </p>
            <p style={styles.paragraph}>
              I am driven by commitment to create innovative and user-friendly
              web applications tailored to the needs of diverse clients.
            </p>
          </div>
        </Card.Body>
      </Card>
      {fitnessCertifications.map((image, index) => {
        if (index % 2 === 0) {
          return (
            <Row key={index}>
              <Col md={6}>
                <a href={fitnessCertifications[index]}>
                  <Card className="my-3" style={styles.cardStyle}>
                    <Card.Img
                      variant="top"
                      src={fitnessCertifications[index]}
                    />
                  </Card>
                </a>
              </Col>
              {fitnessCertifications[index + 1] && (
                <Col md={6}>
                  <a href={fitnessCertifications[index + 1]}>
                    <Card className="my-3" style={styles.cardStyle}>
                      <Card.Img
                        variant="top"
                        src={fitnessCertifications[index + 1]}
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
  );
};

export default About;
