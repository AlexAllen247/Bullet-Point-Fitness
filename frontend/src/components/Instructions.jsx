import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import BulletPointSVG from "./BulletPointSVG";

const Instructions = () => {
  const styles = {
    card: {
      textAlign: "center",
      color: "#df0000",
      borderWidth: "2px",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
      textAlign: "center",
    },
    instructions: {
      textAlign: "left",
      marginBottom: "20px",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
    },
    ulTwo: {
      listStyleType: "none",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
    },
    button: {
      margin: 10,
    },
    link: {
      textDecoration: "none",
    },
  };

  return (
    <Container>
      <h1 style={styles.header}>Bullet Point Fitness Manual</h1>
      <Card className="my-3" style={styles.card} border="danger">
        <Card.Body>
          <div style={styles.instructions}>
            <h3 style={styles.header}>Program Instructions</h3>
            <ul style={styles.ul}>
              <li>
                <BulletPointSVG /> <strong>For first-time users: </strong>
                Before starting your program, take time to review all the
                exercises listed for your workouts. Watching the exercise
                demonstration videos, by clicking on the exercise, will help you
                understand proper form and technique. Once familiar, ensure that
                you know where all necessary equipment is located in your gym.
                Having a clear idea of where to find everything will make your
                workout smoother and help you stay on track. If your gym does
                not have access to a specific piece of equipment or if you're
                unsure about an exercise, don't hesitate to get in contact with
                us. We can provide alternative exercises or adjust your program
                to better suit your needs.
              </li>

              <li>
                <BulletPointSVG /> Perform each workout with at least one rest
                day between. On rest days, you can do light aerobic activities
                like walking, cycling, swimming, rowing, or using the
                elliptical.
              </li>
              <li>
                <BulletPointSVG /> When training three times a week, follow a
                Mon/Wed/Fri or Tues/Thurs/Sat schedule, or any combination that
                allows a rest day between each workout.
              </li>
              <li>
                <BulletPointSVG /> For more frequent training, alternate
                training days like this:
                <ul style={styles.ulTwo}>
                  <li>
                    <BulletPointSVG />
                    Week 1: Mon/Wed/Fri/Sun
                  </li>
                  <li>
                    <BulletPointSVG />
                    Week 2: Tues/Thurs/Sat
                  </li>
                  <li>
                    <BulletPointSVG />
                    Repeat.
                  </li>
                </ul>
              </li>
              <li>
                <BulletPointSVG /> For Stages 1 and 2, perform each workout once
                per week.
              </li>
              <li>
                <BulletPointSVG /> For Stage 3, follow the alternate day
                schedule.
              </li>
              <li>
                <BulletPointSVG /> If you have any further queries don't
                hesitate to get in contact.
              </li>
            </ul>
            <div style={styles.buttonContainer}>
              <a href="/workouts" style={styles.link}>
                <Button
                  type="submit"
                  variant="danger"
                  style={styles.button}
                  aria-label="Submit"
                  className="btn-custom"
                >
                  Onto Workouts
                </Button>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card className="my-3" style={styles.card} border="danger">
        <Card.Body>
          <div style={styles.instructions}>
            <h3 style={styles.header}>Workout Instructions</h3>
            <ul style={styles.ul}>
              <li>
                <BulletPointSVG /> When you're performing an exercise or workout
                for the first time and are unsure about the appropriate weight,
                start with a lighter load. Perform the exercise until task
                failure (the point where you can no longer maintain proper
                form). Record the weight and the number of reps you completed,
                and use this as your baseline to progress in future sessions.
              </li>
              <li>
                <BulletPointSVG /> The goal of each exercise and workout is to
                build up to one working set per exercise, where you push to
                maximize both weight and reps. Only log the weight and reps for
                this one working set—there's no need to track your warm-up sets.
              </li>
              <li>
                <BulletPointSVG /> Aim to reach task failure within 4-10 reps
                for your working set, with the ideal range being 5-8 reps.
              </li>
              <li>
                <BulletPointSVG /> Focus on increasing weight in your working
                set as the main goal. Increase reps to adapt to any new weight
                before moving up. Use the guidance on each exercise to gauge
                whether you should increase reps or weight.
              </li>
              <li>
                <BulletPointSVG /> When increasing the weight, always use the
                smallest increment possible (e.g., 2.5 kg or smaller). Avoid
                large jumps.
              </li>
              <li>
                <BulletPointSVG /> Click on an exercise to view a demo video.
                Before starting your workout, make sure to watch the demo videos
                for each exercise to ensure you know how to perform them
                correctly.
              </li>
              <li>
                <BulletPointSVG /> To warm up correctly:
                <ul style={styles.ulTwo}>
                  <li>
                    <BulletPointSVG />
                    Perform a 10-minute aerobic exercise at 60% of your maximum
                    heart rate: (220 - your age) x 0.6.
                  </li>
                  <li>
                    <BulletPointSVG />
                    For the first exercise, perform warmup sets as follows:
                    <ul style={styles.ulTwo}>
                      <li>
                        <BulletPointSVG />
                        50% of your working weight for 5 reps
                      </li>
                      <li>
                        <BulletPointSVG />
                        70% of your working weight for 2-3 reps
                      </li>
                      <li>
                        <BulletPointSVG />
                        85% of your working weight for 1-2 reps
                      </li>
                    </ul>
                  </li>
                  <li>
                    <BulletPointSVG />
                    Rest for 2 minutes before performing your working set.
                  </li>
                  <li>
                    <BulletPointSVG />
                    For the subsequent exercises, you can use the 70% and 85%
                    warmup sets to minimize fatigue.
                  </li>
                </ul>
              </li>
              <li>
                <BulletPointSVG /> If you can't perform an exercise due to lack
                of equipment, contact us to modify your program.
              </li>
              <li>
                <BulletPointSVG /> To change the order of exercises, click the
                "Re-order exercises" button, drag and drop the exercises, and
                then save.
              </li>
              <li>
                <BulletPointSVG /> If you have any further queries don't
                hesitate to get in contact.
              </li>
            </ul>
            <div style={styles.buttonContainer}>
              <a href="/workouts" style={styles.link}>
                <Button
                  type="submit"
                  variant="danger"
                  style={styles.button}
                  aria-label="Submit"
                  className="btn-custom"
                >
                  Onto Workouts
                </Button>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Instructions;
