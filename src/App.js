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
import Swiper from "./components/Swiper";

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const [scrollPos1, setScrollPos1] = useState(0);
  const [scrollPos2, setScrollPos2] = useState(0);
  const [scrollPos3, setScrollPos3] = useState(0);
  const [scrollPos4, setScrollPos4] = useState(0);
  const [scrollPos5, setScrollPos5] = useState(0);
  const [scrollPos6, setScrollPos6] = useState(0);

  // Sayfa scroll edildiğinde pozisyonu güncelle
  const handleScroll = () => {
    setScrollPos1(ref1.current.getBoundingClientRect().top);
    setScrollPos2(ref2.current.getBoundingClientRect().top);
    setScrollPos3(ref3.current.getBoundingClientRect().top);
    setScrollPos4(ref4.current.getBoundingClientRect().top);
    setScrollPos5(ref5.current.getBoundingClientRect().top);
    setScrollPos6(ref6.current.getBoundingClientRect().top);
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
      <div ref={ref1}>{scrollPos1 < 900 ? <ThreeCircles linkId={"projects"} /> : ""}</div>
      <h2 className="section-header ms-4 text-white">My Projects </h2>
      <Projects />
      <div ref={ref2}>{scrollPos2 < 900 ? <ThreeCircles linkId={"skills"} /> : ""}</div>
      <h2 className="section-header ms-4 text-white">My Skills</h2>
      <Skills />
      <div ref={ref3}>{scrollPos3 < 900 ? <ThreeCircles linkId={"experiences"} /> : ""}</div>
      <h2 className="section-header ms-4 text-white">Experiences</h2>
      <Experience />
      <div ref={ref4}>{scrollPos4 < 900 ? <ThreeCircles linkId={"educations"} /> : ""}</div>
      <h2 className="section-header ms-4 text-white">Educations</h2>
      <Educations />
      <div ref={ref5}>{scrollPos5 < 900 ? <ThreeCircles linkId={"contact"} /> : ""}</div>
      <h2 className="section-header ms-4 text-white">Contact</h2>
      <Contact />
      <div ref={ref6}>{scrollPos6 < 900 ? <ThreeCircles /> : ""}</div>
      <Footer />
    </div>
  );
}

export default App;
