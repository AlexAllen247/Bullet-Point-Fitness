import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const styles = {
    section: {
      maxWidth: 500,
      margin: "auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#df0000",
    },
  };
  return (
    <section className="privacy policy" style={styles.section}>
      <h3>Privacy Policy</h3>
      <p>
        This Privacy Policy outlines the types of personal data that we collect,
        how we use and protect that data, and your rights regarding your
        personal data. We are committed to protecting your privacy in accordance
        with the General Data Protection Regulation (GDPR).
      </p>
      <h3>Collection of Personal Data</h3>
      <p>
        We may collect personal data from you when you submit a contact form or
        request information from us. The personal data we may collect could
        include your name, email address and any other information that you
        provide for us.
      </p>
      <h3>Use of Personal Data</h3>
      <p>
        We may use your personal data to provide you with services, to
        communicate with you and to comply with legal obligations. We will never
        sell, rent, or share your personal data with any third parties without
        your consent, except as required by law.
      </p>
      <h3>Protection of Personal Data</h3>
      <p>
        We take appropriate technical and organizational measures to protect
        your personal data from unauthorized access, alteration, disclosure, or
        destruction. We limit access to your personal data to employees,
        contractors, and agents who need to know the data to perform their
        duties and who are bound by confidentiality obligations.
      </p>
      <h3>Your Rights</h3>
      <p>
        You have the right to access and receive a copy of your personal data
        that we hold. Request correction or erasure of your personal data.
        Object to the processing of your personal data. Restrict the processing
        of your personal data. Request a transfer of your personal data to
        another controller. To exercise your rights, please contact us using the
        contact information below.
      </p>
      <h3>Changes to this Privacy Policy</h3>
      <p>
        We reserve the right to update or modify this Privacy Policy at any
        time. Any changes will be posted on our website with the effective date
        of the revised policy.
      </p>
      <h3>Contact Information</h3>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        handling of your personal data, please contact TeckBuff at
        alexanderallen032@gmail.com or use the contact form{" "}
        <Link to="/contactforms" aria-label="Link to Contact page">
          {" "}
          here.
        </Link>
      </p>
    </section>
  );
};

export default PrivacyPolicy;
