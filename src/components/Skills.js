import { useEffect, useRef, useState } from "react";
import "./Skills.css";
import "./hovers.css";
import skills1 from "../images/skills1.png";
import skills2 from "../images/skills2.png";
import html from "../images/icons/html.png";
import agile from "../images/icons/agile.png";
import bootstrap from "../images/icons/bootstrap.png";
import css from "../images/icons/css.png";
import git from "../images/icons/git.png";
import github from "../images/icons/github.png";
import jira from "../images/icons/jira.png";
import figma from "../images/icons/figma.png";
import js from "../images/icons/js.png";
import mysql from "../images/icons/mysql.png";
import nodejs from "../images/icons/nodejs.jpg";
import react from "../images/icons/react.png";
import expressjs from "../images/icons/expressjs.png";
import { motion } from "framer-motion";

const Skills = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [scrollPos1, setScrollPos1] = useState(0);
  const [scrollPos2, setScrollPos2] = useState(0);

  // Sayfa scroll edildiğinde pozisyonu güncelle
  const handleScroll = () => {
    setScrollPos1(ref1.current.getBoundingClientRect().top);
    setScrollPos2(ref2.current.getBoundingClientRect().top);
  };

  // Scroll olay dinleyicisini ekleme
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div ref={ref1} style={{ minHeight: "770px" }}>
        {scrollPos1 < 900 ? (
          <motion.div
            className="prof-skills-container"
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
          >
            <ProfSkills />
            <img className="prof-skill-wheel skills-wheel " src={skills1}></img>
          </motion.div>
        ) : (
          ""
        )}
      </div>
      <hr className="w-75" />
      <div ref={ref2} style={{ minHeight: window.innerWidth < 600 ? "550px" : "770px" }}>
        {scrollPos2 < 900 ? (
          <motion.div
            className="pers-skills-container"
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
          >
            <PersSkills />
            <img className="pers-skill-wheel skills-wheel " src={skills2}></img>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const ProfSkills = () => {
  const myProfSkills = [
    {
      skill_name: "Html",
      img: html,
      class: "html",
    },
    {
      skill_name: "Css",
      img: css,
      class: "css",
    },
    {
      skill_name: "JavaScript",
      img: js,
      class: "js",
    },
    {
      skill_name: "Bootstrap",
      img: bootstrap,
      class: "bootstrap",
    },
    {
      skill_name: "React",
      img: react,
      class: "react",
    },
    {
      skill_name: "NodeJs",
      img: nodejs,
      class: "nodejs",
    },
    {
      skill_name: "MySql",
      img: mysql,
      class: "mysql",
    },
    {
      skill_name: "ExpressJs",
      img: expressjs,
      class: "expressjs",
    },
    {
      skill_name: "Agile",
      img: agile,
      class: "agile",
    },
    {
      skill_name: "Figma",
      img: figma,
      class: "figma",
    },
    {
      skill_name: "Git",
      img: git,
      class: "git",
    },
    {
      skill_name: "Github",
      img: github,
      class: "github",
    },
  ];
  return (
    <>
      {myProfSkills.map((skill, index) => (
        <div key={index} className={`skill ${skill.class} hover-2`}>
          <img src={skill.img} className="skill-img"></img>
          <div className="skill-right-content">
            <div className="skill-name-container">
              <span className="skill-point me-2"></span>
              <span className="skill-name text-white">{skill.skill_name}</span>
            </div>
            <div className="progress-container">
              <span className="progress p-orange">
                <span className="progress p-blue"></span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
const PersSkills = () => {
  const myPersSkills = [
    {
      skill_name: "Communication",
      class: "communication",
    },
    {
      skill_name: "Problem-Solving",
      class: "solving",
    },
    {
      skill_name: "Adaptability ",
      class: "adaptability",
    },
    {
      skill_name: "Teamwork",
      class: "teamwork",
    },
    {
      skill_name: "Stress Management",
      class: "stress",
    },
    {
      skill_name: "Creativity",
      class: "creativity",
    },
  ];
  return (
    <>
      {myPersSkills.map((skill, index) => (
        <div key={index} className={`skill ${skill.class} hover-2`}>
          <div className="skill-right-content">
            <div className="skill-name-container">
              <span className="skill-point me-2"></span>
              <span id="pers-skill-name" className="skill-name text-white">
                {skill.skill_name}
              </span>
            </div>
            <div className="progress-container personal-progress">
              <span className="progress p-orange">
                <span className="progress p-blue"></span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
