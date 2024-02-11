import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar  from "./Navbar";
import Home from './components/Home';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};




export default App;