import { useEffect, useRef } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Projects from "./components/Projects";
import About from "./components/About";
import ThreeCircles from "./components/ThreeCircles";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useInView, useAnimation, useScroll, motion, useSpring } from "framer-motion";
import FreelanceProject from "./components/FreelanceProject";
import titleIcon from "./images/titleIcon.png";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
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
    <div className="App">
      <motion.div className="my-progress-bar" style={{ scaleX }} />
      <CustomNavbar />
      <About />
      <ThreeCircles linkId={"projects"} />
      <h2 className="section-header position-relative">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        Some of My Freelance Projects
      </h2>
      <p className="frelance-text">
        Although I’m still a developer learning new things, I also continue to work as a Freelance
        Frontend Developer. Whenever I find time, I take on new projects. Below are some of the
        projects I have completed from start to finish as a freelancer.
      </p>
      <FreelanceProject />
      <ThreeCircles linkId={"projects"} />
      <h2 className="section-header position-relative  ">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        My Other Projects{" "}
      </h2>
      <div ref={ref1} style={{ height: "500px" }}>
        <Projects fromIndex={0} toIndex={9} controls={controls1} />
      </div>
      <div ref={ref2} style={{ height: "500px" }}>
        <Projects fromIndex={10} toIndex={30} controls={controls2} />
      </div>
      <ThreeCircles linkId={"skills"} />
      <h2 className="section-header position-relative  ">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        My Skills
      </h2>
      <Skills />
      <ThreeCircles linkId={"experiences"} />
      <h2 className="section-header position-relative   mb-4">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        Experiences
      </h2>
      <Experience />
      <ThreeCircles linkId={"educations"} />
      <h2 className="section-header position-relative  mt-5  mb-4">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        Educations
      </h2>
      <Educations />
      <ThreeCircles linkId={"contact"} />
      <h2 className="section-header position-relative    mb-4">
        <img
          src={titleIcon}
          width={65}
          className="position-absolute title-icon-image"
          alt="Section header icon"
        />
        Contact
      </h2>
      <Contact />
      <ThreeCircles />
      <Footer />
    </div>
  );
}

export default App;
