import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactForm from "./ContactForm";
import Navigation from "./Navigation";
//import Consultation from "./Consultation";
import Mindset from "./Mindset";
import Nutrition from "./Nutrition";
import Training from "./Training";
import Footer from "./Footer";
import Header from "./Header";

const MainApp = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="training" element={<Training />} />
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="mindset" element={<Mindset />} />
        {/*<Route path="/app/consultation" element={<Consultation />} />*/}
        <Route path="contactforms" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainApp;
