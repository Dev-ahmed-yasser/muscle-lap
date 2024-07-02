import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import ExercisesContext from "./utils/ExercisesContext.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ExercisesContext>
      <App />
    </ExercisesContext>
  </Router>,
);
