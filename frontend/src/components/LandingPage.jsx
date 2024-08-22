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
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            fill="#df0000"
          >
            <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18C8.134 4 5 7.134 5 11s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm1 11h-2v-2h2v2zm0-4h-2V7h2v4z" />
          </svg>
        }
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
      <Block
        title="Contact"
        description="Your Clickable Guide to Nutrient-Rich Organ Health"
        link="/contact-form"
        customText="Click on an organ to find out more"
      />
      {/*
      <Block
        title="Register"
        description="Your Clickable Guide to Nutrient-Rich Organ Health"
        link="/register"
        customText="Click on an organ to find out more"
      />
      */}
      <Block
        title="Login"
        description="Your Clickable Guide to Nutrient-Rich Organ Health"
        link="/login"
        customText="Click on an organ to find out more"
      />
    </Row>
  </Container>
);

export default LandingPage;
