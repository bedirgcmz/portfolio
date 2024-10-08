import { useState, useEffect } from "react";
import "./About.css";
import "./Download.css";
import aboutImg from "../images/about_img.png";
import { motion } from "framer-motion";
import BedirGCv from "../documents/Bedir_Gocmez_Cv.pdf";

const About = () => {
  const [height, setHeight] = useState(window.innerWidth < 769 ? "860px" : "550px");
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
      y: -70,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", delay: 0.3, duration: 1.6 },
    },
  };
  // const fromBottom = {
  //   hidden: {
  //     opacity: 0,
  //     y: -70,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { type: "spring", delay: 0.3, duration: 1.6 },
  //   },
  // };

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth < 769 ? "880px" : "550px");
    };

    // Ekran boyutu değiştiğinde dinleyici ekle
    window.addEventListener("resize", handleResize);
    // Bileşen yüklendiğinde boyutu kontrol et
    handleResize();
    // Bellek sızıntısını önlemek için dinleyiciyi kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="about" className="about-margin-top" style={{ height }}>
      <div className="about-container row">
        <div className="touch-me-container col-md-1">
          <span className="d-inline-block touch">Touch</span>
          <motion.span
            className="d-inline-block line-1"
            variants={fromLeft}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <span className="d-inline-block circle-1"></span>
          <span className="d-inline-block github-icon mt-3 mb-3">
            <a href="https://github.com/bedirgcmz" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
          <span className="d-inline-block linkedin-icon mb-3">
            <a href="https://www.linkedin.com/in/bedirgocmez/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </span>
          <span className="d-inline-block circle-2"></span>
          <motion.span
            className="d-inline-block line-2"
            variants={fromRight}
            initial="hidden"
            animate="visible"
          ></motion.span>
          <span className="d-inline-block me">me</span>
        </div>
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
            I have been working in the IT field since 2020 and have completed numerous courses in
            this domain. Initially, I enrolled in courses through Udemy. Then, in 2022, I
            successfully completed an 11-month FullStack Web Developer program offered by HiCoders.
            Currently, I am pursuing a Frontend/App Developer course at Changemaker Education
            Yrkeshögskola in Sweden. I am passionate about working towards my goals. <br /> <br />
            With the new skills I've acquired, I developed web-based applications for some clients.
            I'm still working on projects for some clients. I'm very eager to learn new
            technologies, especially artificial intelligence. I think I'm very flexible and agile in
            teamwork. I've always enjoyed taking responsibility.
          </motion.p>
        </div>
        <div className="my-img-container col-12  col-sm-12 col-md-5">
          <motion.img
            className="about-img"
            src={aboutImg}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", delay: 0.3, duration: 1.6 },
              },
            }}
            initial="hidden"
            animate="visible"
          ></motion.img>
        </div>
      </div>
      <a
        href={BedirGCv}
        target="_blank"
        className="download-cv-bottom float-right"
        download="Bedir-Gocmez-Cv.pdf"
        rel="noreferrer"
      >
        <span>
          <i className="fa-solid fa-download pe-2"></i>Download CV
        </span>
      </a>
    </div>
  );
};

export default About;
