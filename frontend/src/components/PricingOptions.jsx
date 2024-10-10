import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const PricingOptions = ({ onPlanSelect }) => {
  const plans = [
    {
      id: "price_1Q7CIcFML2sMAV10gYcMeQJi", // Replace with actual monthly price ID
      name: "Monthly Plan",
      description: "$10 per month",
    },
    {
      id: "price_1Q7CJgFML2sMAV10NIVKsdG8", // Replace with actual yearly price ID
      name: "Yearly Plan",
      description: "$100 per year",
    },
  ];

  return (
    <Container>
      <h1>Select Your Plan</h1>
      <Row>
        {plans.map((plan) => (
          <Col key={plan.id}>
            <Card>
              <Card.Body>
                <Card.Title>{plan.name}</Card.Title>
                <Card.Text>{plan.description}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => onPlanSelect(plan.id)} // Call the callback function
                >
                  Choose {plan.name}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingOptions;
