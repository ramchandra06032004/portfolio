import React from "react";
import "../styles/HeroSection.css";
import About from "./About";
import Technology from "./Technology.jsx";
const HeroSection = () => {
  return (
    <div className="home">
      <div className="heroDiv">
        <div className="box1Landing">
          <div className="header">
            Transforming ideas into <br />
            MERN-powered SaaS solutions.
          </div>
          <div className="secondHeader">
            Empower your team's success by leveraging my skills and expertise to
            drive impactful <br />
            growth and innovation within your organization
          </div>
          <div className="getStart">
            <a href="mailto:rajumulik51@gmail.com">Get In Touch</a>
          </div>
        </div>
        <About />
        <Technology />
      </div>
    </div>
  );
};

export default HeroSection;
