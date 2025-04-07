import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { FaGithub, FaLinkedin, FaCode, FaLaptopCode, FaHackerrank } from 'react-icons/fa';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const profiles = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/kannatinaveena/" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/naveena-kannati-210521280/" },
  { name: "LeetCode", icon: <FaCode />, link: "https://leetcode.com/u/NAVEENAKANNATI/" },
  { name: "CodeChef", icon: <FaLaptopCode />, link: "https://www.codechef.com/users/kannatinaveena" },
  { name: "HackerRank", icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/naveena_kannati" }
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8dcb491e-9cff-4761-b310-465264ced6f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Successfuly submitted", res);
    }
  };
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

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I am currently ready to take on new projects</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>naveena.kannati@sasi.ac.in</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Tadepalligudem, AP</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+91 8555008958</p>
            </div>
          </div>
        </div>

        <form onSubmit= {onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required />

          <label htmlFor="message">Write your message</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
