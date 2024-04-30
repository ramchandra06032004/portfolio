import React from "react";
import "../styles/About.css";
const About = () => {
  return (
    <div className="aboutContainer" id="about">
      <div className="Aboutheader">About Me</div>
      <div className="eduContainer">
        <div className="eduHead1">Education</div>
        <div className="eud3div">
          <div className="edu">
            Pursuing B.Tech in Artificial intelligence and data science
            <br /> from Shah & Anchor Kutchi Engineering College, expected to
            pass out in 2026
            <br />
            SGPA(8.36)
          </div>
          <div className="edu mid">
            HSC from Kudal high school Jr. college <br />
            with computer science, 2022 <br /> Percentage(76.33%)
          </div>
          <div className="edu">
            SSC from Shri Devi Sateri high school Vetore <br />
            Percentage(90.20%) 2020
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
