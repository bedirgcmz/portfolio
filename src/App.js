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

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  // const ref6 = useRef(null);

  const [scrollPos1, setScrollPos1] = useState(0);
  const [scrollPos2, setScrollPos2] = useState(0);
  const [scrollPos3, setScrollPos3] = useState(0);
  const [scrollPos4, setScrollPos4] = useState(0);
  const [scrollPos5, setScrollPos5] = useState(0);
  // const [scrollPos6, setScrollPos6] = useState(0);

  // Sayfa scroll edildiğinde pozisyonu güncelle
  const handleScroll = () => {
    setScrollPos1(ref1.current.getBoundingClientRect().top);
    setScrollPos2(ref2.current.getBoundingClientRect().top);
    setScrollPos3(ref3.current.getBoundingClientRect().top);
    setScrollPos4(ref4.current.getBoundingClientRect().top);
    setScrollPos5(ref5.current.getBoundingClientRect().top);
    // setScrollPos6(ref6.current.getBoundingClientRect().top);
  };

  // Scroll olay dinleyicisini ekleme
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <CustomNavbar />
      <About />
      <div id="projects" ref={ref1} className="link-id-tag">
        {scrollPos1 < 900 ? <ThreeCircles linkId={"projects"} /> : ""}
      </div>
      <h2 className="section-header px-4 text-white">My Projects </h2>
      <Projects fromIndex={0} toIndex={9} />
      <Projects fromIndex={10} toIndex={30} />
      <div id="skills" ref={ref2} className="link-id-tag">
        {scrollPos2 < 900 ? <ThreeCircles linkId={"skills"} /> : ""}
      </div>
      <h2 className="section-header px-4 text-white">My Skills</h2>
      <Skills />
      <div id="experiences" ref={ref3} className="link-id-tag">
        {scrollPos3 < 900 ? <ThreeCircles linkId={"experiences"} /> : ""}
      </div>
      <h2 className="section-header px-4 text-white mb-4">Experiences</h2>
      <Experience />
      <div id="educations" ref={ref4} className="link-id-tag">
        {scrollPos4 < 900 ? <ThreeCircles linkId={"educations"} /> : ""}
      </div>
      <h2 className="section-header px-4 text-white  mb-4">Educations</h2>
      <Educations />
      <div id="contact" ref={ref5} className="link-id-tag">
        {scrollPos5 < 900 ? <ThreeCircles linkId={"contact"} /> : ""}
      </div>
      <h2 id="contactt" className="section-header px-4 text-white  mb-4">
        Contact
      </h2>
      <Contact />
      {/* <div ref={ref6} className="link-id-tag">
        {scrollPos6 < 900 ? <ThreeCircles /> : ""}
      </div> */}
      <ThreeCircles />
      <Footer />
    </div>
  );
}

export default App;
