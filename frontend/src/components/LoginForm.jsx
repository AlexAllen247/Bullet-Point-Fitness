import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
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
    <section className="login form">
      <Container>
        <div>
          <h1 style={styles.header}>Login Form</h1>
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
              <Button
                aria-label="Sign In"
                type="submit"
                variant="danger"
                style={styles.button}
                className="btn-custom"
                disabled={!username || !password}
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default LoginForm;
