import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "./hovers.css";
import "./Download.css";
import img1 from "../images/img2.jpg";
import BedirGCv from "../documents/Bedir_Gocmez_Cv.pdf";

const CustomNavbar = () => {
  return (
    <Navbar className="px-3" expand="lg" fixed="top">
      <Navbar.Brand className="brand-container" href="/#">
        <img
          src={img1}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Profile"
        />
        <div className="name-and-title ms-3 me-5 text-center">
          <p className="name text-white">Bedir Gocmez</p>
          <p className="title">Frontend Web Developer</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="hover-3 " href="/#">
            About
          </Nav.Link>
          <Nav.Link className="hover-3" href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className="hover-3" href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className="hover-3" href="#experiences">
            Experiences
          </Nav.Link>
          <Nav.Link className="hover-3" href="#educations">
            Educations
          </Nav.Link>
          <Nav.Link className="hover-3" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <a
        href={BedirGCv}
        target="_blank"
        className="download-cv float-right btn-one"
        download="Bedir-Gocmez-Cv.pdf"
        rel="noreferrer"
      >
        <span>
          <i className="fa-solid fa-download pe-2"></i>Download CV
        </span>
      </a>
    </Navbar>
  );
};

export default CustomNavbar;
