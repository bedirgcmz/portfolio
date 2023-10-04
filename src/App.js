import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Projects from './components/Projects';
import About from './components/About';
import ThreeCircles from './components/ThreeCircles';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* <CustomNavbar />
      <About />
      <ThreeCircles />
      <h2 className='ms-3 text-white'>My Projects</h2>
      <Projects /> */}
      <ThreeCircles />
      <h2 className='ms-3 text-white'>My Skills</h2>
      <Skills />
     {/* <Test/> */}
    </div>
  );
}

export default App;
