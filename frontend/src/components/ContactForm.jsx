import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import contactFormService from "../services/contactForms";
import BulletPointSVG from "./BulletPointSVG";
import SEO from "./SEO";

const ContactForm = ({ notify }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <section className="contact form">
      <SEO
        title="Contact Us | Bullet Point Fitness"
        description="Get in touch with the Bullet Point Fitness team for inquiries, support, or feedback. We're here to help you on your fitness journey."
        keywords="contact us, support, inquiries, feedback, Bullet Point Fitness contact"
        canonicalUrl="https://bulletpointfitness.com/contact-form"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <Container>
        <div>
          <h1 style={styles.header}>Contact Form</h1>
        </div>
        <Card className="my-3" style={styles.card} border="danger">
          <Card.Body>
            <p style={styles.paragraph}>
              If you have any questions or inquiries, please don't hesitate to
              reach out using the contact form below. We'll get back to you as
              soon as possible.
            </p>
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
                  required
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
                  required
                />
              </Form.Group>
              <Button
                aria-label="Submit"
                type="submit"
                variant="danger"
                style={styles.button}
                className="btn-custom"
                disabled={!email || !message}
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
