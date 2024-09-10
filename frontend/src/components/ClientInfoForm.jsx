import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import clientInfoFormService from "../services/clientInfoForm";
import { useNavigate } from "react-router-dom";

const ClientInfoForm = ({ notify }) => {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(null);
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
      navigate("/workout");
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
          <h1 style={styles.header}>Program Form</h1>
        </div>

        {isFirstTimeUser === null && (
          <Card className="my-3" style={styles.card} border="danger">
            <Card.Body>
              <Form style={styles.form}>
                <Form.Group className="mb-3">
                  <Form.Label style={styles.label}>
                    Are you a first-time user or returning user?
                  </Form.Label>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => setIsFirstTimeUser(true)}
                    >
                      First-time User
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setIsFirstTimeUser(false)}
                      style={{ marginLeft: "10px" }}
                    >
                      Returning User
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        )}
        {isFirstTimeUser === true && (
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
                    <option value="">Select Your Stage</option>
                    <option value="Stage 1 (Beginner)">
                      Stage 1 (Beginner)
                    </option>
                    <option value="Stage 2 (Intermediate)">
                      Stage 2 (Intermediate)
                    </option>
                    <option value="Stage 3 (Advanced)">
                      Stage 3 (Advanced)
                    </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="goals" style={styles.label}>
                    Goals
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                  >
                    <option value="">Select Fitness Goal</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="build-muscle">Build Muscle</option>
                    <option value="build-strength">Build Strength</option>
                    <option value="all-of-the-above">All of the Above</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label style={styles.label}>
                    Sessions Per Week
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={sessionsPerWeek}
                    onChange={(e) => setSessionsPerWeek(e.target.value)}
                  >
                    <option value="">Select sessions per week</option>
                    <option value="3">3 Sessions</option>
                    <option value="4">4 Sessions</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label
                    htmlFor="injuriesOrConditions"
                    style={styles.label}
                  >
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
        )}
        {isFirstTimeUser === false && (
          <Card className="my-3" style={styles.card} border="danger">
            <Card.Body>
              <Form onSubmit={handleSubmit} style={styles.form}>
                {/* Customize the returning user form here */}
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="progress" style={styles.label}>
                    How would you rate your progress so far?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Share your experience so far"
                    value={injuriesOrConditions}
                    onChange={(e) => setInjuriesOrConditions(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="fitnessLevel" style={styles.label}>
                    Fitness Level
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={fitnessLevel}
                    onChange={(e) => setFitnessLevel(e.target.value)}
                  >
                    <option value="">Select Your Stage</option>
                    <option value="Stage 1 (Beginner)">
                      Stage 1 (Beginner)
                    </option>
                    <option value="Stage 2 (Intermediate)">
                      Stage 2 (Intermediate)
                    </option>
                    <option value="Stage 3 (Advanced)">
                      Stage 3 (Advanced)
                    </option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="newGoals" style={styles.label}>
                    Have your goals changed?
                  </Form.Label>
                  <Form.Control
                    as="select"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                  >
                    <option value="">Select Fitness Goal</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="build-muscle">Build Muscle</option>
                    <option value="build-strength">Build Strength</option>
                    <option value="all-of-the-above">All of the Above</option>
                  </Form.Control>
                </Form.Group>
                {/* You can add more fields as needed */}
                <Button type="submit" variant="danger" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Container>
    </section>
  );
};

export default ClientInfoForm;
