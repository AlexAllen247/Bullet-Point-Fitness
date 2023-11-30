import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const styles = {
    navStyle: {
      fontSize: 26,
      color: "#df0000",
      margin: 15,
    },
    navbar: {
      marginBottom: 60,
      marginTop: 15,
    },
  };
  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      collapseOnSelect
      expand="lg"
      className="text-center"
      style={styles.navbar}
    >
      <div className="container-fluid">
        <Navbar.Toggle
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#df0000"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75zM1.75 12a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H1.75z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav justify-content-center"
          onClick={() => setExpanded(false)}
        >
          <div className="mx-auto">
            <Nav className="me-auto mt-2 justify-content-center mx-auto">
              <NavLink
                to="/"
                style={styles.navStyle}
                aria-label="Link to Interactive Muscle Anatomy Chart"
              >
                Muscle Map
              </NavLink>
              <NavLink
                to="/training"
                style={styles.navStyle}
                aria-label="Link to Training Essentials video page"
              >
                Training Essentials
              </NavLink>
              <NavLink
                to="/organmap"
                style={styles.navStyle}
                aria-label="Link to the interactive Organ map"
              >
                Organ Map
              </NavLink>
              <NavLink
                to="/pdf"
                style={styles.navStyle}
                aria-label="Link to the Pdf"
              >
                PDF
              </NavLink>
              {/*
              <NavLink
                to="/mindset"
                style={styles.navStyle}
                aria-label="Link to Mindset page"
              >
                Mindset
              </NavLink>
              <NavLink
                to="/consultation"
                style={styles.navStyle}
                aria-label="Link to Consultation page"
              >
                Consultation
              </NavLink>
  */}
              <NavLink
                to="/contactforms"
                style={styles.navStyle}
                aria-label="Link to Contact form"
              >
                Contact
              </NavLink>
              <NavLink
                to="/about"
                style={styles.navStyle}
                aria-label="Link to About page"
              >
                About
              </NavLink>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
