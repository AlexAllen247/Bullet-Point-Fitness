import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
//import Consultation from "./components/Consultation";
import GettingStarted from "./components/GettingStarted";
import Mindset from "./components/Mindset";
import Nutrition from "./components/Nutrition";
import Training from "./components/Training";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const styles = {
    app: {
      fontFamily: "Be Vietnam",
      color: "#df0000",
    },
    cookie: {
      background: "#333",
    },
    button: {
      color: "#fff",
      background: "#df0000",
      fontSize: "13px",
    },
  };
  return (
    <main>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/training" element={<Training />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/mindset" element={<Mindset />} />
          {/*<Route path="/consultation" element={<Consultation />} />*/}
          <Route path="/contactforms" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
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
