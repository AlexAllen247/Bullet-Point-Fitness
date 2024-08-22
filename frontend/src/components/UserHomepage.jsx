import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "./Block";

const UserHomePage = () => {
  return (
    <Container>
      <Row>
        <Block
          title="Program Form"
          description="You can build all aspects of fitness if you focus on muscle."
          link="/client-info-form"
          customText="Click on a muscle to find out more."
        />
        <Block
          title="Workouts"
          description="Watch videos on the essentials of training."
          link="/workout"
          customText="Get started with personalized workout plans."
        />
        <Block
          title="Workout Progression"
          description="Book in a consultation now to start your fitness journey."
          link="/workout-progression"
          customText="Starting your fitness journey or taking it to the next level can be challenging, but you don't need to do it alone."
        />
        <Block
          title="Past Workout Programs"
          description="Your Clickable Guide to Nutrient-Rich Organ Health"
          link="/past-workout-programs"
          customText="Click on an organ to find out more"
        />
        <Block
          title="Past Workout Progressions"
          description="Your Clickable Guide to Nutrient-Rich Organ Health"
          link="/past-workout-progression"
          customText="Click on an organ to find out more"
        />
      </Row>
    </Container>
  );
};

export default UserHomePage;
