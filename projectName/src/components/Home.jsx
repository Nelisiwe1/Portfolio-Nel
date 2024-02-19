import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Homebackground from './Homebackground';

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <Homebackground/>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Navbar */}
        <div className="absolute top-0 right-0 m-4 bg-white w-8" >
          <button onClick={toggleSidebar} className="w-20">☰</button>
        </div>

        {/* Text Content */}
        <div className="text-center text-white">
  <h1 className="text-5xl inline-block p-2">
    <span className="border-black border-4 noto-serif">Nelisiwe Ngqeme</span>
  </h1>
  <p className="noto-serif">Software developer.</p>
  <div className='img'>
  <img src="insta.png" alt=""/>
  <img src="git.png" alt=""/>
  <img src="link.png" alt=""/>
  </div>
</div>



      </div>
    </div>
  );
};

export default Homepage;
