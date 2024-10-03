import { useEffect, useRef } from "react";
import "./Skills.css";
import "./hovers.css";
import skills1 from "../images/skills1.png";
import skills2 from "../images/skills2.png";
import html from "../images/icons/html.png";
// import agile from "../images/icons/agile.png";
import bootstrap from "../images/icons/bootstrap.png";
// import css from "../images/icons/css.png";
import git from "../images/icons/git.png";
// import github from "../images/icons/github.png";
// import jira from "../images/icons/jira.png";
import figma from "../images/icons/figma.png";
import js from "../images/icons/js.png";
import mysql from "../images/icons/mysql.png";
import nodejs from "../images/icons/nodejs.jpg";
import react from "../images/icons/react.png";
import typescript from "../images/icons/typescript.png";
import nextjs from "../images/icons/nextjs.png";
import tailwind from "../images/icons/tailwind.png";
import expressjs from "../images/icons/expressjs.png";
import { motion, useInView, useAnimation } from "framer-motion";

const Skills = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInWiew = useInView(ref1, { once: true });
  const isInWiew2 = useInView(ref2, { once: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInWiew) {
      controls1.start("visible");
    }
    if (isInWiew2) {
      controls2.start("visible");
    }
  }, [isInWiew, isInWiew2, controls1, controls2]);
  return (
    <>
      <section className="prof-top-div">
        <div className="prof-top-div">
          <div className="prof-skills-container">
            <ProfSkills />
            <div ref={ref1} className="skill-img-container">
              <motion.img
                alt="skils image"
                className="prof-skill-wheel skills-wheel "
                src={skills1}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", delay: 0.3, duration: 2.2 },
                  },
                }}
                initial="hidden"
                animate={controls1}
              ></motion.img>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-75" />
      <section style={{ height: window.innerWidth < 600 ? "450px" : "700px" }}>
        <div>
          <div className="pers-skills-container">
            <PersSkills />
            <div ref={ref2} className="skill-img-container">
              <motion.img
                alt="skils image"
                className="pers-skill-wheel skills-wheel "
                src={skills2}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { type: "spring", delay: 0.3, duration: 2.2 },
                  },
                }}
                initial="hidden"
                animate={controls2}
              ></motion.img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProfSkills = () => {
  const myProfSkills = [
    {
      skill_name: "Html - Css",
      img: html,
      class: "html",
    },
    {
      skill_name: "Next.js",
      img: nextjs,
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
      class: "agile",
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
      skill_name: "Tailwind",
      img: tailwind,
      class: "nodejs",
    },
    {
      skill_name: "Figma",
      img: figma,
      class: "figma",
    },
    {
      skill_name: "Git - Github",
      img: git,
      class: "git",
    },
    {
      skill_name: "Typescript",
      img: typescript,
      class: "github",
    },
  ];
  return (
    <>
      {myProfSkills.map((skill, index) => (
        <motion.div
          key={index}
          className={`skill ${skill.class} hover-2`}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 7 }}
        >
          <img src={skill.img} className="skill-img" alt="skil img"></img>
          <div className="skill-right-content">
            <div className="skill-name-container">
              <span className="skill-point me-2"></span>
              <span className="skill-name ">{skill.skill_name}</span>
            </div>
            <div className="progress-container">
              <span className="progress p-orange">
                <span className="progress p-blue"></span>
              </span>
            </div>
          </div>
        </motion.div>
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
        <motion.div
          key={index}
          className={`skill ${skill.class} hover-2`}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 7 }}
        >
          {/* <img src={skill.img} className="skill-img"></img> */}
          <div className="skill-right-content">
            <div className="skill-name-container">
              <span className="skill-point me-2"></span>
              <span id="pers-skill-name" className="skill-name ">
                {skill.skill_name}
              </span>
            </div>
            <div className="progress-container personal-progress">
              <span className="progress p-orange">
                <span className="progress p-blue"></span>
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Skills;
