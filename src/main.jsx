// import libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home/index.jsx";
import Apartment from "./pages/Apartment/index.jsx";
import About from "./pages/About/index.jsx";
import Error from "./pages/Error/index.jsx";

// import components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// import utils

// import assets
import "./assets/styles/main.scss";

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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartment/:id' element={<Apartment />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
