import React, { useState } from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import registerService from "../services/register";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import PricingOptions from "./PricingOptions";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import SEO from "./SEO";

const stripePromise = loadStripe(
  "pk_test_51Q3DOuFML2sMAV10HqYkCXL4UO6JGQG2laQf0fx0kTjRXpfJ93DiC9ihs7ukHnqqBJhvgeP3I0lrtnGOaKd9Us1V0089w2dEJI",
);

const RegisterForm = ({ notify, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  const handlePlanSelection = (priceId) => {
    setSelectedPlan(priceId);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const cardElement = elements.getElement(CardElement);
    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          email,
        },
      });

    if (paymentError) {
      notify(
        `Failed to create payment method: ${paymentError.message}`,
        "alert",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const subscriptionResponse = await fetch(
        "/api/stripe/create-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            paymentMethodId: paymentMethod.id,
            priceId,
          }),
        },
      );

      const subscriptionResult = await subscriptionResponse.json();

      if (subscriptionResponse.status !== 200) {
        throw new Error(subscriptionResult.error.message);
      }

      createUser({ username, password, email, phone });

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setPhone("");
      navigate("/login");
      onLogin(username, password);
      navigate("/user-homepage");
    } catch (subscriptionError) {
      notify(`Subscription failed: ${subscriptionError.message}`, "alert");
    }

    setIsSubmitting(false);
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
    <section className="register form">
      <SEO
        title="Register & Subscribe | Bullet Point Fitness"
        description="Create your Bullet Point Fitness account to access personalized workout programs and track your fitness progress. Register and subscribe to get started on your fitness journey."
        keywords="register, subscribe, fitness account, personalized workout, fitness tracking, Bullet Point Fitness registration"
        canonicalUrl="https://bulletpointfitness.com/register"
        ogImage="https://bulletpointfitness.com/og-image.png"
      />
      <Container>
        <div>
          <h1 style={styles.header}>Register</h1>
        </div>

        {!selectedPlan && <PricingOptions onPlanSelect={handlePlanSelection} />}
        {selectedPlan && (
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
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="cardDetails" style={styles.label}>
                    Payment Information
                  </Form.Label>
                  <CardElement id="cardDetails" />
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
                    !phone ||
                    !stripe ||
                    isSubmitting
                  }
                >
                  Register & Subscribe
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Container>
    </section>
  );
};

const RegisterWithStripe = () => (
  <Elements stripe={stripePromise}>
    <RegisterForm />
  </Elements>
);

export default RegisterWithStripe;
