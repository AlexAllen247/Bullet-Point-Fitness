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
      color: "#df0000",
    },
    button: {
      margin: 10,
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="footer" style={styles.section}>
      <h4>Copyright Alex Allen {currentYear}</h4>
      <h4>
        Powered by{" "}
        <a
          href="https://teckbuff.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to TeckBuff.com"
        >
          TeckBuff
        </a>
      </h4>
      <Button
        variant="danger"
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
