import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <a onClick={scrollToTop} className="back-top">
        <span>Back Top </span>
        <span>
          <i class="fa-solid fa-chevron-right"></i>
          <i class="fa-solid fa-chevron-right" style={{ opacity: 0.7 }}></i>
          <i class="fa-solid fa-chevron-right" style={{ opacity: 0.4 }}></i>
        </span>
      </a>
      <div className="footer-left-side">
        <p className="my-2">&#169; 2023 Copyright</p>
        <p className="my-2">Bedir Gocmez</p>
      </div>
      <div className="vertical-line"></div>
      <div className="footer-right-side">
        <a href="#about" className="footer-link">
          About
        </a>
        <a href="#project" className="footer-link">
          Project
        </a>
        <a href="#skills" className="footer-link">
          Skills
        </a>
        <a href="#experiences" className="footer-link">
          Experiences
        </a>
        <a href="#educations" className="footer-link">
          Educations
        </a>
        <a href="#contact" className="footer-link">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
