import React from "react";
import "../styles/Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footerContainer" id="footer">
      <div className="innerDiv">
        <div className="connectHead">Get in touch</div>
        <div className="connectOptContainer">
          <div className="connectLeft">
            <div className="location">
              <FaLocationDot /> Dombivali,Thane,Maharashtra
            </div>
            <div className="location">
              <IoMailUnread />
              Email:rajumulik51@gmail.com
            </div>
          </div>
          <div className="connectRight">
            <a
              href="https://www.instagram.com/mulik_raju_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/ramchandra06032004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajumulik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/ramchandra-mulik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
