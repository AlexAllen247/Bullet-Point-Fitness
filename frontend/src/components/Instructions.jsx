import React from "react";
import { Card, Container } from "react-bootstrap";
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
  };

  return (
    <Container>
      <h1 style={styles.header}>Workout Instructions</h1>
      <Card className="my-3" style={styles.card} border="danger">
        <Card.Body>
          <div style={styles.instructions}>
            <ul style={styles.ul}>
              <li>
                <BulletPointSVG /> Aim for 4-10 reps per set, with the ideal
                range being 5-8 reps.
              </li>
              <li>
                <BulletPointSVG /> Focus on increasing weight as the main goal.
                Use reps to adapt to the weight before moving up.
              </li>
              <li>
                <BulletPointSVG /> When increasing the weight, always use the
                smallest increment possible (e.g., 2.5 kg or smaller). Avoid
                large jumps.
              </li>
              <li>
                <BulletPointSVG /> Perform these sessions with at least one rest
                day between each. On rest days, you can do light aerobic
                activities like walking, cycling, swimming, rowing, or using the
                elliptical.
              </li>
              <li>
                <BulletPointSVG /> If you train three times a week, follow a
                Mon/Wed/Fri or Tues/Thurs/Sat schedule, or any combination that
                allows rest days.
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
                <BulletPointSVG /> Click on an exercise to view a demo video.
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
                    For the following exercises, you can use the 70% and 85%
                    warmup sets to minimize fatigue.
                  </li>
                </ul>
              </li>
              <li>
                <BulletPointSVG /> Each exercise includes one working set. Warm
                up appropriately and rest for 2 minutes before the main set.
                Focus on maximizing intensity.
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
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Instructions;
