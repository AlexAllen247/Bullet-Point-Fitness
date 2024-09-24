import React from "react";
import { Container, Row } from "react-bootstrap";
import Block from "./Block";
import { Helmet } from "react-helmet";

const UserHomePage = () => {
  return (
    <Container>
      <Row>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Block
          title="Bullet Point Fitness Manual"
          description="Read the Bullet Point Fitness Manual to make the most out of your training program."
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
