import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Ramchandra Mulik</div>
      <div className="navOptions">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Work
        </Link>
        <Link to="footer" smooth={true} duration={500}>
          Connect
        </Link>
      </div>
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/13Hi08NdzNU7-ERstbX-xS8CjF4GAYyni/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
