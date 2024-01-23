import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import NotFound from "./components/NotFound";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
import Consultation from "./components/Consultation";
//import Mindset from "./components/Mindset";
import OrganMap from "./components/OrganMap";
import MuscleMap from "./components/MuscleMap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import TrainingVideos from "./components/TrainingVideos";
//import Pdf from "./components/Pdf";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";

import userService from "./services/user";
import loginService from "./services/login";

const App = () => {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setUser(null);
    const userFromStorage = userService.getUser();
    if (userFromStorage) {
      setUser(userFromStorage);
    }
  }, []);

  const notify = (message, type = "info") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const login = async (username, password) => {
    loginService
      .login({
        username,
        password,
      })
      .then((user) => {
        setUser(user);
        userService.setUser(user);
        notify(
          `${user.username} logged in!/${user.username} se ha iniciado sesion!`,
        );
      })
      .catch(() => {
        notify(
          "Incorrect username/password, please try again./ Nombre de usario/constrasena incorrectos, por favor, intentalo de neuvo.",
          "alert",
        );
      });
  };

  const logout = () => {
    setUser(null);
    userService.clearUser();
    notify("Goodbye!/Adios!");
  };

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

  const Home = () => {
    return (
      <div>
        <LoginForm onLogin={login} />
      </div>
    );
  };

  if (user === null) {
    return (
      <div className="app">
        <Header />
        <Notification notification={notification} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
  }

  return (
    <div className="app">
      <Header />
      <Notification notification={notification} />
      <Navigation onLogout={logout} />
      <main>
        <Routes>
          <Route path="/" element={<MuscleMap />} />
          <Route path="/training" element={<TrainingVideos />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/organmap" element={<OrganMap />} />
          {/*<Route path="/pdf" element={<Pdf />} />
          <Route path="mindset" element={<Mindset />} />*/}
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
