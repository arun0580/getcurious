import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { NavBarWrapper } from "./components/NavBarWrapper";
import Footer from "./components/Footer/Footer";

// Screens
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Community } from "./screens/Community";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Router>
      {/* NavBar always visible */}
      <NavBarWrapper />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        {/*  <Route path="/k12" element={<K12 />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </Router>
  </StrictMode>
);
