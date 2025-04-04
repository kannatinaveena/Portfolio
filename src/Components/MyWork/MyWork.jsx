import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='projects' className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-item">
            <a 
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              {work.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
