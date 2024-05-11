import { useEffect, useRef, useState } from "react";
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
import { useInView, useAnimation } from "framer-motion";

function App() {
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
  }, [isInWiew, isInWiew2]);

  return (
    <div className="App">
      <CustomNavbar />
      <About />
      <ThreeCircles linkId={"projects"} />
      <h2 className="section-header px-4 text-white">My Projects </h2>
      <div ref={ref1} style={{ height: "500px" }}>
        <Projects fromIndex={0} toIndex={9} controls={controls1} />
      </div>
      <div ref={ref2} style={{ height: "500px" }}>
        <Projects fromIndex={10} toIndex={30} controls={controls2} />
      </div>
      <ThreeCircles linkId={"skills"} />
      <h2 className="section-header px-4 text-white">My Skills</h2>
      <Skills />
      <ThreeCircles linkId={"experiences"} />
      <h2 className="section-header px-4 text-white mb-4">Experiences</h2>
      <Experience />
      <ThreeCircles linkId={"educations"} />
      <h2 className="section-header px-4 text-white  mb-4">Educations</h2>
      <Educations />
      <ThreeCircles linkId={"contact"} />
      <h2 className="section-header px-4 text-white  mb-4">Contact</h2>
      <Contact />
      <ThreeCircles />
      <Footer />
    </div>
    // <div className="App">
    //   <CustomNavbar />
    //   <About />
    //   <section className="link-id-tag">
    //     <div id="projects" ref={ref1} className="link-id-tag">
    //       {scrollPos1 < 900 ? <ThreeCircles linkId={"projects"} /> : ""}
    //     </div>
    //   </section>
    //   <h2 className="section-header px-4 text-white">My Projects </h2>
    //   <Projects fromIndex={0} toIndex={9} />
    //   <Projects fromIndex={10} toIndex={30} />
    //   <section className="link-id-tag">
    //     <div id="skills" ref={ref2} className="link-id-tag">
    //       {scrollPos2 < 900 ? <ThreeCircles linkId={"skills"} /> : ""}
    //     </div>
    //   </section>
    //   <h2 className="section-header px-4 text-white">My Skills</h2>
    //   <Skills />
    //   <section className="link-id-tag">
    //     <div id="experiences" ref={ref3} className="link-id-tag">
    //       {scrollPos3 < 900 ? <ThreeCircles linkId={"experiences"} /> : ""}
    //     </div>
    //   </section>
    //   <h2 className="section-header px-4 text-white mb-4">Experiences</h2>
    //   <Experience />
    //   <section className="link-id-tag">
    //     <div id="educations" ref={ref4} className="link-id-tag">
    //       {scrollPos4 < 900 ? <ThreeCircles linkId={"educations"} /> : ""}
    //     </div>
    //   </section>
    //   <h2 className="section-header px-4 text-white  mb-4">Educations</h2>
    //   <Educations />
    //   <section className="link-id-tag">
    //     <div id="contact" ref={ref5} className="link-id-tag">
    //       {scrollPos5 < 900 ? <ThreeCircles linkId={"contact"} /> : ""}
    //     </div>
    //   </section>
    //   <h2 className="section-header px-4 text-white  mb-4">Contact</h2>
    //   <Contact />
    //   <ThreeCircles />
    //   <Footer />
    // </div>
  );
}

export default App;
