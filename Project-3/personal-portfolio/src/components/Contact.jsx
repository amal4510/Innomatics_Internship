import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import '../styles/Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="container contact-container">
          <h2 className="text-center">Get in Touch</h2>
          <p className="text-center">Feel free to reach out! I’ll get back to you as soon as possible.</p>

          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control custom-input" placeholder="Full Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control custom-input" placeholder="Email Address" required />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <textarea className="form-control custom-input" placeholder="Your Message" rows="5" required></textarea>
              </div>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn custom-btn">Send Message</button>
            </div>
          </form>

          <div className="social-icons text-center mt-4">
            <a href="https://www.instagram.com/amal_manoj_31/" target="_blank" className="social-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/amal-manoj-148626222/" target="_blank" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/amal4510" target="_blank" className="social-icon">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}
