import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>,
);
