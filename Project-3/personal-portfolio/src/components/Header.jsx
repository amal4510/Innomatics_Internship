import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components
import { LinkContainer } from 'react-router-bootstrap'; // Import LinkContainer for routing
import '../styles/Header.css'; // Ensure the path to App.css is correct

const Header = ({ scrollToAbout, scrollToSkills, scrollToProjects, scrollToContact }) => {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        className="navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
              <Nav.Link onClick={scrollToSkills}>Skills</Nav.Link>
              <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
              <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero-container">
        <div className="hero-header">
          <img src="/me.jpg" alt="Amal Manoj" height="150px" width="150px" />
          <div className="hero-text">
            <h2>Amal Manoj</h2>
            <h4 className="web-developer">Web Developer</h4>
          </div>
          <div className="vertical-line"></div>
          <div className="social-links">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <p>amalmanoj4510@gmail.com</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone-fill">
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
              </svg>
              <p>8010284654</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
