import React from "react";
import "./Footer.css";
import { motion, useInView, useAnimation } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <a
        onClick={scrollToTop}
        className="back-top"
        // animate={{
        //   scale: [1, 1.3, 1.3, 1, 1],
        //   rotate: [-90, -90, 180, 180, -90],
        //   borderRadius: ["0%", "0%", "30%", "30%", "0%"],
        // }}
        // transition={{
        //   duration: 2,
        //   ease: "easeInOut",
        //   times: [0, 0.2, 0.5, 0.8, 1],
        //   repeat: Infinity,
        //   repeatDelay: 1,
        // }}
      >
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
        <a href="/#" className="footer-link">
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
