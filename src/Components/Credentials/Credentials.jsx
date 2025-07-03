import React from "react";
import "./Credentials.css";
import theme_pattern from '../../assets/theme_pattern.svg';

const certifications = [
  {
    name: "Machine Learning",
    platform: "SkillDzire",
    date: "Dec 2024",
    link: "https://drive.google.com/file/d/1Hw1CQ8iJ9JB5iEw5HsW0bGafS2cbklZw/view"
  },
  {
    name: "Data Analysis",
    platform: "Deloitte",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1aGiM8yEMIGgQtsba1fwpKOrZieLilds8/view"
  },
  {
    name: "Backend",
    platform: "MongoDB",
    date: "Oct 2024",
    link: "https://drive.google.com/file/d/1-iBVccVUgevQJFJu1wvjmq4S7X8IJwcp/view"
  },
  {
    name: "Data Analytics",
    platform: "AICTE",
    date: "Jan 2024",
    link: "https://drive.google.com/file/d/14oI9qynuvUrv5XLutOLiAuWveeV3s365/view?usp=drive_link"
  },
  {
    name: "Juniper Networks – Networking & Cloud Computing",
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
