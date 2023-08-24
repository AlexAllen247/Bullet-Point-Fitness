import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
import MainApp from "./components/MainApp";

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
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/app/*" element={<MainApp />} />
        <Route path="*" element={<NotFound />} />
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
    </main>
  );
};

export default App;
