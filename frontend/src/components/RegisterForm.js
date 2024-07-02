import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import registerService from "../services/register";

const RegisterForm = ({ notify }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  const createUser = async (newUser) => {
    registerService
      .register(newUser)
      .then(() => {
        notify(`You have successfully registered!`);
      })
      .catch((error) => {
        notify(
          "Failed to register, maybe you made a mistake " +
            error.response.data.error,
          "alert",
        );
      });
  };

  const validateForm = () => {
    if (username.length < 3) {
      notify("Username must be at least 3 characters long", "alert");
      return false;
    }
    if (!password || password.length < 3) {
      notify("Password must be at least 3 characters long", "alert");
      return false;
    }
    if (password !== confirmPassword) {
      notify("Passwords do not match!", "alert");
      return false;
    }
    if (!emailRegex.test(email)) {
      notify("Please enter a valid email address.", "alert");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      notify("Please enter a valid phone number.", "alert");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    console.log("New User created!");
    createUser({ username, password, email, phone });
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setPhone("");
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
    <section className="register form">
      <Container>
        <div>
          <h1 style={styles.header}>Register</h1>
        </div>
        <Card className="my-3" style={styles.card} border="danger">
          <Card.Body>
            <Form onSubmit={handleSubmit} style={styles.form}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="username" style={styles.label}>
                  Username
                </Form.Label>
                <Form.Control
                  value={username}
                  onChange={({ target }) => setUsername(target.value)}
                  id="username"
                  placeholder="Enter your username"
                  aria-label="Username"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email" style={styles.label}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  id="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone" style={styles.label}>
                  Phone
                </Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
                  id="phone"
                  placeholder="Enter your phone number"
                  aria-label="Phone"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="password" style={styles.label}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                  id="password"
                  placeholder="Enter your password"
                  aria-label="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="confirmPassword" style={styles.label}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={({ target }) => setConfirmPassword(target.value)}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  aria-label="Confirm Password"
                />
              </Form.Group>
              <Button
                aria-label="Register"
                type="submit"
                variant="danger"
                style={styles.button}
                className="btn-custom"
                disabled={
                  !username ||
                  !password ||
                  password !== confirmPassword ||
                  !email ||
                  !phone
                }
              >
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default RegisterForm;
