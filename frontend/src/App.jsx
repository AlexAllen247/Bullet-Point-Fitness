import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import CookieConsent from "react-cookie-consent";
import NotFound from "./components/NotFound";
import ContactForm from "./components/ContactForm";
import Navigation from "./components/Navigation";
import Consultation from "./components/Consultation";
import OrganMap from "./components/OrganMap";
import MuscleMap from "./components/MuscleMap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import TrainingVideos from "./components/TrainingVideos";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ClientInfoForm from "./components/ClientInfoForm";
import Workout from "./components/Workout";
import InactiveWorkouts from "./components/InactiveWorkouts";
import ProgressGraph from "./components/ProgressGraph";
import InactiveProgressGraph from "./components/InactiveProgressGraphs";
import LandingPage from "./components/LandingPage";
import UserHomepage from "./components/UserHomepage";
import Instructions from "./components/Instructions";
import ScrollToTop from "./components/ScrollToTop";

import userService from "./services/user";
import loginService from "./services/login";

const App = () => {
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

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
    try {
      const response = await loginService.login({ username, password });
      const user = {
        ...response,
        userId: response.id,
      };
      userService.setUser(user);
      setUser(user);
      navigate("/user-homepage");
      notify(`${user.username} successfully logged in!`);
    } catch (error) {
      notify("Incorrect username/password, please try again.", "alert");
    }
  };

  const logout = () => {
    setUser(null);
    userService.clearUser();
    navigate("/");
    notify("Goodbye!");
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

  if (user === null) {
    return (
      <div className="app">
        <Header />
        <Navigation user={user} onLogout={logout} />
        <main>
          <Notification notification={notification} />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/muscle-map" element={<MuscleMap />} />
            <Route path="/training" element={<TrainingVideos />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/organ-map" element={<OrganMap />} />
            <Route path="/login" element={<LoginForm onLogin={login} />} />
            {/*
            <Route
              path="/register"
              element={<RegisterForm notify={notify} />}
            />
            */}
            <Route
              path="/contact-form"
              element={<ContactForm notify={notify} />}
            />
            <Route path="/about" element={<About />} />
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
      <Navigation user={user} onLogout={logout} />
      <main>
        <Notification notification={notification} />
        <ScrollToTop />
        <Routes>
          <Route path="/user-homepage" element={<UserHomepage />} />
          <Route
            path="/program-form"
            element={<ClientInfoForm notify={notify} />}
          />
          <Route path="/instructions" element={<Instructions />} />
          <Route
            path="/workouts"
            element={<Workout userId={user.id} notify={notify} />}
          />
          <Route
            path="/workout-progression"
            element={<ProgressGraph userId={user.id} />}
          />
          <Route
            path="/past-workout-programs"
            element={<InactiveWorkouts userId={user.id} notify={notify} />}
          />
          <Route
            path="/past-workout-progression"
            element={<InactiveProgressGraph userId={user.id} />}
          />
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
