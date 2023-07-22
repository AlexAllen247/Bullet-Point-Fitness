import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
import Consultation from "./components/Consultation";
import GettingStarted from "./components/GettingStarted";
import Mindset from "./components/Mindset";
import Nutrition from "./components/Nutrition";
import Training from "./components/Training";

const App = () => {
  const styles = {
    app: {
      fontFamily: "Arial Unicode MS",
    },
    cookie: {
      background: "#333",
    },
    button: {
      color: "#fff",
      background: "#0047ab",
      fontSize: "13px",
    },
  };
  return (
    <main>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/training" element={<Training />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/mindset" element={<Mindset />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contactforms" element={<ContactForm />} />
        </Routes>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="myCookieName"
          style={styles.cookie}
          buttonStyle={styles.button}
        >
          This website uses cookies to ensure you get the best experience on our
          website. By continuing to use this site, you consent to the use of
          cookies.
        </CookieConsent>
      </div>
    </main>
  );
};

export default App;
