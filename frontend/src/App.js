import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import NotFound from "./components/NotFound";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
//import Consultation from "./components/Consultation";
//import Mindset from "./components/Mindset";
import Nutrition from "./components/Nutrition";
import MuscleMap from "./components/MuscleMap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import TrainingVideos from "./components/TrainingVideos";

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
    <div className="app">
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<MuscleMap />} />
          <Route path="/training" element={<TrainingVideos />} />
          <Route path="/nutrition" element={<Nutrition />} />
          {/*<Route path="mindset" element={<Mindset />} />
        <Route path="/app/consultation" element={<Consultation />} />*/}
          <Route path="contactforms" element={<ContactForm />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
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
  );
};

export default App;
