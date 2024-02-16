import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Sidebar";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";



const App = () => {
  return (
    
    <main className='bg-slate-300/20'>
     
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
