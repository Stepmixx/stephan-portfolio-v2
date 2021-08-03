import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form action="https://www.freecodecamp.com/email-submit" id="form">
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <label>Message</label>
          <textarea
            id="message"
            placeholder="Enter your message (optional)..."
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="social-media">
          <a
            target="_blank"
            rel="noreferrer"
            id="profile-link"
            href="https://github.com/Stepmixx"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.freecodecamp.org/stepmix"
          >
            <i className="fab fa-free-code-camp"></i>
          </a>
        </div>
        <footer>
          <small>2021 &copy; Stephan. All rights reserved</small>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
