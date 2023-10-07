import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left-side">
        <p>&#169; 2023 Copyright: Bedir Gocmez</p>
      </div>
      <div className="vertical-line"></div>
      <div className="footer-right-side">
        <a href="#about" className="footer-link">About</a>
        <a href="#project" className="footer-link">Project</a>
        <a href="#skills" className="footer-link">Skills</a>
        <a href="#experiences" className="footer-link">Experiences</a>
        <a href="#educations" className="footer-link">Educations</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
