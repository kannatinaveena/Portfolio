import React from 'react'
import './Footer.css'
import LOGO1 from '../../assets/LOGO1.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={LOGO1} alt=""  width="100"/>
                    <p>text4</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr/>
        </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 copyrights reserverd</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
