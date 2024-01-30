import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import clientInfoFormService from "../services/clientInfoForm";

const ClientInfoForm = ({ notify }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goals, setGoals] = useState("");
  const [previousExerciseExperience, setPreviousExerciseExperience] =
    useState("");
  const [injuriesOrConditions, setInjuriesOrConditions] = useState("");

  const createInfoForm = async (clientInfoForm) => {
    clientInfoFormService
      .create(clientInfoForm)
      .then(() => {
        notify(`You have successfully submitted your information.`);
      })
      .catch((error) => {
        notify(
          "Creating a message failed: " + error.response.data.error,
          "alert",
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createInfoForm({
      age,
      gender,
      height,
      weight,
      fitnessLevel,
      goals,
      previousExerciseExperience,
      injuriesOrConditions,
    });
  };

  const styles = {
    card: {
      textAlign: "center",
      color: "#df0000",
      borderWidth: "2px",
    },
    form: {
      width: "80%",
      display: "block",
      margin: "0 auto",
    },
    header: {
      color: "#df0000",
      fontWeight: "bold",
      textDecoration: "underline",
      marginBottom: 40,
      textAlign: "center",
    },
    label: {
      fontSize: 28,
      marginBottom: 35,
    },
    button: {
      padding: 15,
      marginTop: 35,
      marginBottom: 35,
    },
  };

  return (
    <section className="client-info-form">
      <Container>
        <div>
          <h1 style={styles.header}>Client Information Form</h1>
        </div>
        <Card className="my-3" style={styles.card} border="danger">
          <Card.Body>
            <Form onSubmit={handleSubmit} style={styles.form}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="fitnessLevel" style={styles.label}>
                  Fitness Level
                </Form.Label>
                <Form.Control
                  as="select"
                  value={fitnessLevel}
                  onChange={(e) => setFitnessLevel(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="goals" style={styles.label}>
                  Goals
                </Form.Label>
                <Form.Control
                  type="text"
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="age" style={styles.label}>
                  Age
                </Form.Label>
                <Form.Control
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="gender" style={styles.label}>
                  Gender
                </Form.Label>
                <Form.Control
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="height" style={styles.label}>
                  Height (in cms)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="weight" style={styles.label}>
                  Weight (in kgs)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label
                  htmlFor="previousExerciseExperience"
                  style={styles.label}
                >
                  Previous Exercise Experience
                </Form.Label>
                <Form.Control
                  as="select"
                  value={previousExerciseExperience}
                  onChange={(e) =>
                    setPreviousExerciseExperience(e.target.value)
                  }
                >
                  <option value="">Select experience level</option>
                  <option value="none">None</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="injuriesOrConditions" style={styles.label}>
                  Any Injuries or Underlying Health Conditions
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={injuriesOrConditions}
                  onChange={(e) => setInjuriesOrConditions(e.target.value)}
                  placeholder="Write here..."
                />
              </Form.Group>
              <Button
                type="submit"
                variant="danger"
                style={styles.button}
                className="btn-custom"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default ClientInfoForm;
