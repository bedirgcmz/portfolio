import { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "./hovers.css";
import "./Download.css";
import img1 from "../images/img2.jpg";
import BedirGCv from "../documents/Bedir_Gocmez_Cv.pdf";

const CustomNavbar = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState("");
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Section IDs that match the sections in the Nav
  const sections = ["about", "projects", "skills", "experiences", "educations", "contact"];

  // Effect to listen for scroll events and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  // Function to handle menu closing when clicking outside
  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    // Attach event listener to handle clicks outside of the navbar
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Clean up the listener
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Navbar ref={navbarRef} expanded={expanded} className="px-3" expand="lg" fixed="top">
      <Navbar.Brand className="brand-container" href="/#">
        <img src={img1} width="40" height="40" className="d-inline-block align-top" alt="Profile" />
        <div className="name-and-title ms-3 me-5 text-center">
          <p className="name">Bedir Gocmez</p>
          <p className="title">Frontend Web Developer</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <a
            className={`hover-3 ${activeSection === "about" ? "active" : ""}`}
            href="#about"
            onClick={() => setExpanded(false)} // Collapse menu on link click
          >
            About
          </a>
          <a
            className={`hover-3 ${activeSection === "projects" ? "active" : ""}`}
            href="#projects"
            onClick={() => setExpanded(false)}
          >
            Projects
          </a>
          <a
            className={`hover-3 ${activeSection === "skills" ? "active" : ""}`}
            href="#skills"
            onClick={() => setExpanded(false)}
          >
            Skills
          </a>
          <a
            className={`hover-3 ${activeSection === "experiences" ? "active" : ""}`}
            href="#experiences"
            onClick={() => setExpanded(false)}
          >
            Experiences
          </a>
          <a
            className={`hover-3 ${activeSection === "educations" ? "active" : ""}`}
            href="#educations"
            onClick={() => setExpanded(false)}
          >
            Educations
          </a>
          <a
            className={`hover-3 ${activeSection === "contact" ? "active" : ""}`}
            href="#contact"
            onClick={() => setExpanded(false)}
          >
            Contact
          </a>
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
