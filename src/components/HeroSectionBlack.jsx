import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSectionBlack.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
const HeroSectionBlack = () => {
  return (
    <div className="home" id="projects">
      <div className="heroDivBlack">
        <div className="projectsContainer">
          <div className="projectHeader">Projects</div>
          <div className="project">
            <div className="projectLeft">FeelFree.org</div>
            <div className="line"></div>
            <div className="projectRight">
              Empower your mental wellness journey with our MERN-stack powered
              platform, offering personalized support and resources.
              <br />
              <div className="ilinkIcon">
                <a
                  href="https://github.com/ramchandra06032004/sem4MajorProject"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <Link to="/feelfree.org">
                  <div className="Overview">Overview</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="project">
            <div className="projectLeft">GYM Website</div>
            <div className="line"></div>
            <div className="projectRight">
              Elevate your fitness journey with our custom-built MERN-stack gym
              website, crafted to inspire, motivate, and guide you towards your
              health and wellness goals.
              <br />
              <div className="ilinkIcon">
                <a
                  href="https://github.com/ramchandra06032004/gymWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://ramchandra06032004.github.io/gymWebsite/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="projectLeft">MI UI Clone </div>
            <div className="line"></div>
            <div className="projectRight">
              Experience the sleek functionality and intuitive design of our
              MERN-stack based Mi UI website clone, offering a seamless user
              experience reminiscent of the original
              <br />
              <div className="ilinkIcon">
                <a
                  href="https://github.com/ramchandra06032004/Mi_Ui_clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://miuiclonebyramchandra.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBlack;
