import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "./Block";

const UserHomePage = () => {
  return (
    <Container>
      <Row>
        <Block
          title="Workout Instructions"
          description="Read these instructions to make the most out of your training program."
          link="/instructions"
        />
        <Block
          title="Program Form"
          description="Complete the form to get your personalised training program."
          link="/program-form"
        />
        <Block
          title="Workouts"
          description="Click here to access your workouts and track your lifts."
          link="/workouts"
        />
        <Block
          title="Workout Progression"
          description="Click here to see your progress in each exercise of each workout."
          link="/workout-progression"
        />
        <Block
          title="Past Workout Programs"
          description="Have a look at your previous workout programs."
          link="/past-workout-programs"
        />
        <Block
          title="Past Workout Progressions"
          description="View past progression of your previous workout programs."
          link="/past-workout-progression"
        />
      </Row>
    </Container>
  );
};

export default UserHomePage;
