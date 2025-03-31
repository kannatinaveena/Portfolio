import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/images.jpg"

const About = () => {
  return (
    <div id='about'className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hi, I'm NAVEENA KANNATI, a passionate and aspiring Software Engineer with a strong foundation in Python, Java, SQL, and Web Development. As a fresher, I am eager to learn and grow in the tech industry, constantly improving my skills in full-stack development, problem-solving, and DevOps.</p>
                    <p>I have hands-on experience in MERN stack projects, including building a To-Do application and a Book Store app, and I am currently working on a React-based project. I am also exploring containerization with Docker and Kubernetes to enhance my DevOps knowledge.

I am always excited to take on new challenges and contribute to innovative projects. Let's connect and build something amazing together!</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML AND CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>JAVA</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>DSA</p><hr style={{width:"40%"}} /></div>
                    
                </div>
            </div>
        </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>0+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>3+</h1>
            <p>Projects Completed</p>
        </div>

        <hr/>
        <div className="about-achievement">
            <h1>2+</h1>
            <p>Happy clients</p>
        </div>

      </div>
    </div>
  )
}

export default About
