import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import Notification from "./Notification";
import pdfService from "../services/pdfs";
import BulletPointSVG from "./BulletPointSVG";

const Pdf = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [fitnessGoal, setFitnessGoal] = useState("");

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const downloadPDF = async (fileName) => {
    try {
      const response = await pdfService.get(fileName);
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      notify("Error in downloading the PDF: " + error.message, "alert");
    }
  };

  const createPDF = async () => {
    try {
      const formData = { email, message, fitnessGoal };
      const { fileName } = await pdfService.create(formData);
      await downloadPDF(fileName);
      notify(`A new PDF has been created and downloaded.`);
    } catch (error) {
      notify(
        "Creating and downloading the PDF failed: " + error.message,
        "alert",
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim() || !message.trim()) {
      notify("Email and message cannot be empty", "alert");
      return; // Stop the function if validation fails
    }
    if (!fitnessGoal) {
      notify("Please select a fitness goal", "error");
      return;
    }
    createPDF();
    setEmail("");
    setMessage("");
    setFitnessGoal("");
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
    paragraph: {
      fontSize: 20,
      maxWidth: 500,
      margin: "auto",
      marginBottom: 10,
    },
  };

  return (
    <section className="pdf">
      <Container>
        <div>
          <h1 style={styles.header}>Your Fitness Journey</h1>
        </div>
        <Card className="my-3" style={styles.card} border="danger">
          <Card.Body>
            <p style={styles.paragraph}>Your Fitness Journey</p>
            <Notification notification={notification} />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email" style={styles.label}>
                  <BulletPointSVG />
                  Email
                </Form.Label>
                <Form.Control
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  id="email"
                  placeholder="Place your email here"
                  style={styles.form}
                  aria-label="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="message" style={styles.label}>
                  <BulletPointSVG />
                  Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  id="message"
                  placeholder="Place your message here"
                  style={styles.form}
                  aria-label="Message"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="fitnessGoal" style={styles.label}>
                  <BulletPointSVG />
                  Fitness Goal
                </Form.Label>
                <Form.Control
                  as="select"
                  value={fitnessGoal}
                  onChange={({ target }) => setFitnessGoal(target.value)}
                  id="fitnessGoal"
                  style={styles.form}
                  aria-label="Fitness Goal"
                >
                  <option value="">Select your goal</option>
                  <option value="fatLoss">Fat Loss</option>
                  <option value="muscleGain">Muscle Gain</option>
                  {/* Add other fitness goals as needed */}
                </Form.Control>
              </Form.Group>
              <Button
                aria-label="Submit"
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

export default Pdf;
