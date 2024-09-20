import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Block from "./Block";
import Image1 from "../images/BulletLanding.webp";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const styles = {
    ctaSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "30px",
    },
    ctaText: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
    },
    text: {
      color: "#df0000",
      fontSize: 24,
    },
    ctaButton: {
      margin: 10,
      backgroundColor: "#df0000",
      borderColor: "#df0000",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
    },
    link: {
      textDecoration: "none",
    },
  };

  return (
    <Container>
      <Row style={styles.ctaSection}>
        <Col md={6}>
          <Card className="text-center" style={{ border: "none" }}>
            <Card.Body>
              <Card.Title style={styles.ctaText}>
                <h1>Welcome to Bullet Point Fitness</h1>
              </Card.Title>
              <Card.Text style={styles.text}>
                Start your fitness journey with our interactive tools and
                personalized programs. Learn, train, and transform.
              </Card.Text>
              <Link to="/login" style={styles.link}>
                <Button
                  style={styles.ctaButton}
                  variant="danger"
                  aria-label="Get Started"
                  className="btn-custom"
                >
                  Get Started
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src={Image1} alt="Fitness Transformation" style={styles.image} />
        </Col>
      </Row>
      <Row>
        <Block
          title="Interactive Muscle Map"
          description="You can build all aspects of fitness if you focus on muscle. Click on a muscle to find out more."
          link="/muscle-map"
        />
        <Block
          title="Training Essentials"
          description="Watch videos on the essential concepts of training."
          link="/training"
        />
        <Block
          title="Consultation"
          description="Book in a consultation now to start your fitness journey."
          link="/consultation"
        />
        <Block
          title="Interactive Organ Map"
          description="Your Clickable Guide to Nutrient-Rich Organ Health, click on an organ to find out more."
          link="/organ-map"
        />
        <Block
          title="About"
          description="Find out more about Bullet Point Fitness and all the qualifications."
          link="/about"
        />
        <Block
          title="Contact"
          description="Want to get in contact, click here to send a message."
          link="/contact-form"
        />
        {/*
      <Block
        title="Register"
        description="Sign up to start your fitness journey."
        link="/register"
      />
      */}
        <Block
          title="Login"
          description="Click here to login to your personalised program."
          link="/login"
        />
      </Row>
    </Container>
  );
};

export default LandingPage;
