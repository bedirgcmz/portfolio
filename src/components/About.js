import React from "react";
import "./About.css";
import "./Download.css";
import aboutImg from "../images/about_img.png";
import { motion } from "framer-motion";

const About = () => {
  const fromLeft = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  const fromRight = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  const fromTop = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  const fromBottom = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  return (
    <div id="about" className="about-margin-top">
      {/* <h2 className='ms-4 text-white'>About Me</h2> */}
      <div className="about-container row">
        <div className="touch-me-container col-md-1">
          <span className="d-inline-block touch">Touch</span>
          <motion.span
            className="d-inline-block line-1"
            variants={fromBottom}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <span className="d-inline-block circle-1"></span>
          <span className="d-inline-block github-icon mt-3 mb-3">
            <a href="https://github.com/bedirgcmz" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </span>
          <span className="d-inline-block linkedin-icon mb-3">
            <a href="https://www.linkedin.com/in/bedirgocmez/" target="_blank">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
          <span className="d-inline-block circle-2"></span>
          <motion.span
            className="d-inline-block line-2"
            variants={fromTop}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <span className="d-inline-block me">me</span>
        </div>
        {/* <div className='about-me-text-container col-6 col-sm-12 col-'> */}
        <div className="about-me-text-container col-12 col-sm-12 col-md-6">
          <motion.h1
            className="my-fullname text-center"
            variants={fromTop}
            initial="hidden"
            animate="visible"
          >
            Welcome, I'm <span className="d-block">Bedir Gocmez</span>{" "}
          </motion.h1>
          <motion.p
            className="about-me-text text-justify"
            variants={fromRight}
            initial="hidden"
            animate="visible"
          >
            I am an ambitious Developer with a passion for software and technology. I have been
            improving myself in the field of informatics for 2 years. I continued learning on many
            platforms and learned different programming languages. I also completed a course called
            "Full Stack Web Development". Now I have started the "Frontend / App Developer" training
            at Högskola. A few years ago, I developed web-based applications with my newly acquired
            skills and I am able to improve myself in front-end and back-end disciplines. I am very
            keen to learn new technologies and especially artificial intelligence. I think I am very
            flexible and agile in team work.
          </motion.p>
        </div>
        {/* <div className='my-img-container col-5  col-sm-12 col-'> */}
        <div className="my-img-container col-12  col-sm-12 col-md-5">
          <motion.img
            className="about-img"
            src={aboutImg}
            variants={fromBottom}
            initial="hidden"
            animate="visible"
          ></motion.img>
        </div>
      </div>
      <a href="#" target="" className="download-cv-bottom float-right">
        <span>
          <i class="fa-solid fa-download pe-2"></i>Download CV
        </span>
      </a>
    </div>
  );
};

export default About;
