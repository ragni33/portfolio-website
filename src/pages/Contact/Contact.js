import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <br />
        <h1 className="contact-heading" style={{ textAlign: "center" }}>
          Contact Me.
        </h1>
        <div className="contact-content">
          <div className="contact-item">
            <h5>
              <FaMapMarkerAlt className="contact-icon" /> Location: Karachi,
              Pakistan
            </h5>
          </div>
          <div className="contact-item">
            <h5>
              {" "}
              <FaPhone className="contact-icon" /> Phone: +92 3327557766{" "}
            </h5>
          </div>
          <div className="contact-item">
            <h5>
              <a href="mailto:ragnichawla3@gmail.com">
                <FaEnvelope className="contact-icon" /> Email:
                ragnichawla3@gmail.com
              </a>
            </h5>
          </div>

          <div className="contact-item">
            <a href="https://www.linkedin.com/in/ragni-chawla-385245198/">
              <FaLinkedin className="contact-icon social-icon" />
            </a>
            <a href="https://github.com/ragni33">
              <FaGithub className="contact-icon social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
