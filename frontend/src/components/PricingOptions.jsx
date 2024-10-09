import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PricingOptions = () => {
  const navigate = useNavigate();

  const handlePlanSelection = (priceId) => {
    navigate("/register", { state: { priceId } });
  };

  return (
    <Container>
      <h1>Select Your Plan</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Monthly Plan</Card.Title>
              <Card.Text>$10/month</Card.Text>
              <Button
                variant="danger"
                onClick={() =>
                  handlePlanSelection("price_1Q7CIcFML2sMAV10gYcMeQJi")
                } // Replace with actual monthly price ID
              >
                Choose Monthly
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Yearly Plan</Card.Title>
              <Card.Text>$100/year</Card.Text>
              <Button
                variant="danger"
                onClick={() =>
                  handlePlanSelection("price_1Q7CIcFML2sMAV10gYcMeQJi")
                } // Replace with actual yearly price ID
              >
                Choose Yearly
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingOptions;
