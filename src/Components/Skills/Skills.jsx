import React from "react";
import "./Skills.css"; // Make sure you have the related CSS
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3, SiC, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },

  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "C Programming", icon: <SiC /> },
  { name: "UI/UX", icon: <SiFigma /> },
];

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
