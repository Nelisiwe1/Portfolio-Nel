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
          <button onClick={toggleSidebar} className="w-10">☰</button>
        </div>

        {/* Text Content */}
        <div className="text-center text-white">
          <h1 className="text-4xl">Nelisiwe Ngqeme</h1>
          <p>Software developer.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
