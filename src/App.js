import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroSectionWhite from "./components/HeroSection.jsx";
import HeroSectionBlack from "./components/HeroSectionBlack.jsx";
import Footer from "./components/Footer.jsx";
import FeelFree from "./components/FeelFree.jsx"; // import the component for /feelfree.org
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSectionWhite />
                <HeroSectionBlack />
              </>
            }
          />
          <Route path="/feelfree.org" element={<FeelFree />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
