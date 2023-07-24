import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import { Button } from "react-bootstrap";

const Footer = () => {
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(false);

  const handlePrivacyPolicyToggle = () => {
    setIsPrivacyPolicyVisible((prevState) => !prevState);
  };
  const styles = {
    section: {
      textAlign: "center",
      padding: 15,
    },
    button: {
      margin: 10,
    },
  };

  return (
    <section className="footer" style={styles.section}>
      <h4>Copyright Alex Allen 2023</h4>
      <Button
        variant="primary"
        onClick={handlePrivacyPolicyToggle}
        style={styles.button}
        aria-label="Privacy Policy"
        className="btn-custom"
      >
        Privacy Policy
      </Button>
      {isPrivacyPolicyVisible ? <PrivacyPolicy /> : null}
    </section>
  );
};

export default Footer;
