import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import clientInfoFormService from "../services/clientInfoForm";
import { useNavigate } from "react-router-dom";

const ClientInfoForm = ({ notify }) => {
  const [sessionDuration, setSessionDuration] = useState("");
  const [sessionsPerWeek, setSessionsPerWeek] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [goals, setGoals] = useState("");
  const [injuriesOrConditions, setInjuriesOrConditions] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createInfoForm = async (clientInfoForm) => {
    setLoading(true);
    try {
      await clientInfoFormService.create(clientInfoForm);
      notify(`You have successfully submitted your information.`);
      setLoading(false);
      navigate.push("/workout");
    } catch (error) {
      notify(
        "Creating a message failed: " + error.response.data.error,
        "alert",
      );
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createInfoForm({
      sessionDuration,
      sessionsPerWeek,
      fitnessLevel,
      goals,
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
                <Form.Label htmlFor="session-duration" style={styles.label}>
                  Session Duration (minutes)
                </Form.Label>
                <Form.Control
                  as="select"
                  value={sessionDuration}
                  onChange={(e) => setSessionDuration(e.target.value)}
                >
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={styles.label}>Sessions Per Week</Form.Label>
                <Form.Control
                  as="select"
                  value={sessionsPerWeek}
                  onChange={(e) => setSessionsPerWeek(e.target.value)}
                >
                  <option value="1">1 session</option>
                  <option value="2">2 sessions</option>
                  <option value="3">3 sessions</option>
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
              <Button type="submit" variant="danger" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default ClientInfoForm;
