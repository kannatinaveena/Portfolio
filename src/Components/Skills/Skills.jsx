import React from "react";
import "./Skills.css"; // Import CSS
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SQL", icon: <FaDatabase /> },
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
