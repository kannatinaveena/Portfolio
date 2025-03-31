import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState(""); // Updated state for result message
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to handle button disable

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "4a6ca397-95af-4f12-9251-16de7f478876");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Email sent successfully!");
      event.target.reset();
    } else {
      setResult("Error: " + data.message);
    }

    setIsSubmitting(false);
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Feel free to reach out to me for any inquiries or collaborations.</p>          
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>naveena.kannati@sasi.ac.in</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91 8555008958</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Modugagunta, AP</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" autoComplete="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" autoComplete="email" required />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Now"}
          </button>

          {/* Display form submission message */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
