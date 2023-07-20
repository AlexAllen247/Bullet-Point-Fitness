import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import Notification from "./Notification";
import contactFormService from "../services/contactForms";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const createForm = async (contactForm) => {
    contactFormService
      .create(contactForm)
      .then(() => {
        notify(`A new message by has been sent.`);
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      notify("Please enter a valid email address.", "alert");
      return;
    }
    console.log("Form submitted!");
    createForm({ email, message });
    setEmail("");
    setMessage("");
  };

  const styles = {
    cardStyle: {
      boxShadow: "10px 10px 10px 10px rgba(0, 71, 171, 0.15)",
      textAlign: "center",
    },
    form: {
      width: "80%",
      display: "block",
      margin: "0 auto",
      boxShadow: "10px 10px 10px rgba(0, 71, 171, 0.15)",
    },
    header: {
      fontSize: "2rem",
      marginBottom: "1rem",
      paddingBottom: "0.5rem",
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
    <section className="contact form">
      <Container>
        <Card className="my-3" style={styles.cardStyle}>
          <Card.Header>
            <h2 style={styles.header}>Contact Form</h2>
          </Card.Header>
          <Card.Body>
            <p style={styles.paragraph}>
              If you have any questions or inquiries, please don't hesitate to
              reach out using the contact form below. We'll get back to you as
              soon as possible.
            </p>
            <Notification notification={notification} />
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email" style={styles.label}>
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
              <Button
                aria-label="Submit"
                type="submit"
                variant="primary"
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

export default ContactForm;
