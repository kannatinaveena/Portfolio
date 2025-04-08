import React from "react";
import "./Credentials.css";
import theme_pattern from '../../assets/theme_pattern.svg';

const certifications = [
  {
    name: "Python for Everybody",
    platform: "NPTEL",
    date: "Aug 2023",
    link: "https://drive.google.com/file/d/19ICiCQ4vdiyDymcNsbGrBj621OuoxufR/view"
  },
  {
    name: "Python Essentials",
    platform: "UpGrad",
    date: "Sep 2024",
    link: "https://drive.google.com/file/d/11roetwDSFVwl3L6K7YtJcaEXwHw6_30d/view"
  },
  {
    name: "Python(Basic)",
    platform: "HackerRank",
    date: "Jan 2025",
    link: "https://www.hackerrank.com/certificates/38aaf5ded0c8"
  },
  {
    name: "Flipkart Grid 5.0",
    platform: "Flipkart",
    date: "Feb 2025",
    link: "https://drive.google.com/file/d/19seZzg3TSgNhBSqivNItKbthvbXKMPyn/view"
  },
  {
    name: "Data Analytics",
    platform: "AICTE",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/14oI9qynuvUrv5XLutOLiAuWveeV3s365/view?usp=drive_link"
  },
  {
    name: "Juniper Networks",
    platform: "AICTE",
    date: "Apr 2024",
    link: "https://drive.google.com/file/d/1obNqpAMiDCXGhcv9HYsc0RL83uxRyjZQ/view?usp=drive_link"
  },

];

const Certifications = () => {
  return (
    <div id='certifications' className="certifications">
      <div className="certifications-title">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h2>{cert.name}</h2>
            <p>{cert.platform}</p>
            <p>{cert.date}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certification-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;