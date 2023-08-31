import React from "react";
import home from "../../assets/images/home.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";

function Header() {
  return (
    <section>
      <Navbar expand="lg" className="header">
        <Navbar.Brand href="/">
          <h3 className="logo">Ragni | Dev</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-bar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {" "}
            {/* Add ml-auto class here */}
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section id="home" className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="home-title">Hi, I'm Ragni Chawla</h2>
              <p className="home-subtitle">A Full Stack Developer</p>
              <p className="home-description">
                Welcome to my portfolio website. I specialize in building web
                applications with a focus on both front-end and back-end
                development. Let's explore some of my projects and skills!
              </p>
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
            </div>
            <div className="col-lg-6">
              <img src={home} alt="Developer" className="home-image" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Header;
