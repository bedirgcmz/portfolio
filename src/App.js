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
  return (
    <div className="App">
      <CustomNavbar />
      <About />
      <ThreeCircles linkId={"projects"} />
      <h2 className="section-header ms-4 text-white">My Projects</h2>
      <Projects />
      <ThreeCircles linkId={"skills"} />
      <h2 className="section-header ms-4 text-white">My Skills</h2>
      <Skills />
      <ThreeCircles linkId={"experiences"} />
      <h2 className="section-header ms-4 text-white">Experiences</h2>
      <Experience />
      <ThreeCircles linkId={"educations"} />
      <h2 className="section-header ms-4 text-white">Educations</h2>
      <Educations />
      <ThreeCircles linkId={"contact"} />
      <h2 className="section-header ms-4 text-white">Contact</h2>
      <Contact />
      <ThreeCircles />
      <Footer />
    </div>
  );
}

export default App;
