import React from 'react';
import './Footer.css';
import LOGO1 from '../../assets/LOGO1.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef ,SiHackerrank} from 'react-icons/si';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={LOGO1} alt="Logo" width="100" />
          <h3>Let's build something amazing together!</h3>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <h3 className="footer-bottom-left">© 2025 All rights reserved</h3>
        <div className="footer-bottom-right">
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
        </div>
        <h3 className="footer-social-text">Connect with me on:</h3>
        <div className="footer-social-icons">
          <a href="https://www.linkedin.com/in/naveena-kannati-210521280/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={50} />
          </a>
          <a href="https://github.com/kannatinaveena" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50}  />
          </a>
          <a href="https://www.codechef.com/users/kannatinaveena" target="_blank" rel="noopener noreferrer">
            <SiCodechef size={50}  />
          </a>
          <a href="https://leetcode.com/u/NAVEENAKANNATI/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode size={50} />
          </a>
          <a href="https://www.hackerrank.com/profile/naveena_kannati" target="_blank" rel="noopener noreferrer">
            < SiHackerrank size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
