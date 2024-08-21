import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "./Block";

const LandingPage = () => (
  <Container>
    <Row>
      <Block
        title="Interactive Muscle Map"
        description="You can build all aspects of fitness if you focus on muscle."
        link="/muscle-map"
        customText="Click on a muscle to find out more."
      />
      <Block
        title="Training Essentials"
        description="Watch videos on the essentials of training."
        link="/training"
        customText="Get started with personalized workout plans."
      />
      <Block
        title="Consultation"
        description="Book in a consultation now to start your fitness journey."
        link="/consultation"
        customText="Starting your fitness journey or taking it to the next level can be challenging, but you don't need to do it alone."
      />
      <Block
        title="Interactive Organ Map"
        description="Your Clickable Guide to Nutrient-Rich Organ Health"
        link="/organ-map"
        customText="Click on an organ to find out more"
      />
      <Block
        title="About"
        description="Your Clickable Guide to Nutrient-Rich Organ Health"
        link="/about"
        customText="Click on an organ to find out more"
      />
    </Row>
  </Container>
);

export default LandingPage;
