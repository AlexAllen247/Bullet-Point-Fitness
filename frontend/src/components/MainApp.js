import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import Navigation from "./Navigation";
//import Consultation from "./Consultation";
//import Mindset from "./Mindset";
//import Nutrition from "./Nutrition";
import Fitness from "./Fitness";
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";

const MainApp = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="fitness" element={<Fitness />} />
        {/*<Route path="nutrition" element={<Nutrition />} />
        <Route path="mindset" element={<Mindset />} />
        <Route path="/app/consultation" element={<Consultation />} />*/}
        <Route path="contactforms" element={<ContactForm />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainApp;
