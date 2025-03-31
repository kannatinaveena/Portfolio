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
                    <p>text1</p>
                    <p>text2</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML AND CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}} /></div>
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
