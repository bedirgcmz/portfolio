import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <About />
      <Projects />
     {/* <Test/> */}
    </div>
  );
}

export default App;
