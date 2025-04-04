import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaHackerrank } from 'react-icons/fa';

const profiles = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/kannatinaveena/" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/naveena-kannati-210521280/" },
  { name: "LeetCode", icon: <FaCode />, link: "https://leetcode.com/u/NAVEENAKANNATI/" },
  { name: "CodeChef", icon: <FaLaptopCode />, link: "https://www.codechef.com/users/kannatinaveena" },
  { name: "HackerRank", icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/naveena_kannati" }
];

const Contact = () => {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-container">
        {profiles.map((profile, index) => (
          <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-icon">{profile.icon}</span>
            <p>{profile.name}</p>
          </a>
        ))}
      </div>

      <div className="contact-showmore" onClick={() => window.open("https://kannatinaveena.github.io/portfolio/", "_blank")}>
        <p>View More</p>
      </div>
    </div>
  );
};

export default Contact;
