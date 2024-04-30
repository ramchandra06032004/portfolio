import React from "react";
import "../styles/Technology.css";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Technology = () => {
  return (
    <div className="techContainer">
      <div className="techHeader">Modern Tech Expertise</div>
      <div className="techIncons">
        <div>
          <SiExpress />
        </div>
        <div>
          <SiMongodb />
        </div>
        <div>
          <GrMysql />
        </div>
        <div>
          <FaReact />
        </div>
        <div>
          <FaNode />
        </div>
        <div>
          <FaHtml5 />
        </div>
        <div>
          <IoLogoJavascript />
        </div>

        <div>
          <FaJava />
        </div>
        <div>
          <FaCss3 />
        </div>
        <div>
          <FaPython />
        </div>
        <div>
          <FaGitAlt />
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <TbBrandVscode />
        </div>
        <div>
          <FaBootstrap />
        </div>
        <div>
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
};

export default Technology;
