// import libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import components
import App from "./components/App.jsx";

// import utils

// import assets
import "./assets/styles/main.css";

/**
 * Entry point of the application.
 *
 * This function renders the main App component into the root DOM element
 * wrapped in React's StrictMode for additional checks during development.
 *
 * @returns {void} - Renders the App component inside StrictMode.
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
