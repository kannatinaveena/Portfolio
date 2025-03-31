import React from 'react'
import './Hero.css'
import images from "../../assets/images.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home'className='hero'>
            <img src={images} alt="" />
            <h1><span>I am NAVEENA.KANNATI  </span>
                frontend Developer from SITE.</h1>
            <p>I am a frontend Developer try to become a full stack Developer</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero
