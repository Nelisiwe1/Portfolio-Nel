// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  const [submenuHidden, setSubmenuHidden] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(true);

  const dropDown = () => {
    setSubmenuHidden(!submenuHidden);
  };

  const openBar = () => {
    setSidebarLeft(!sidebarLeft);
  };

  return (
    <div className="bg-blue-600 font-Poppins">
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={openBar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 left-${sidebarLeft ? '-300' : '0'} duration-1000 p-2 w-64 lg:w-300 overflow-y-auto text-center bg-orange-600 shadow h-screen`}>
  <div className="text-gray-100 text-xl">
    <div className="p-2.5 mt-1 flex items-center rounded-md">
      <img 
        src="IMG-20231229-WA0033.jpg" 
        className="w-16 h-16 object-cover absolute top-5 left-0 rounded-full" 
        alt="Image" 
      />
      <div className="ml-16">
        <h1 className="text-15px text-xl text-gray-200 font-bold">Nelisiwe</h1>
        <h1 className="text-15px text-xl text-gray-200 font-bold">Ngqeme</h1>

      </div>
      <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={openBar}></i>
    </div>
  


          <hr className="my-10 text-gray-600" />

          <div>
            {/* <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700">
              <i className="bi bi-search text-sm"></i>
              <input className="text-15px ml-4 w-full bg-transparent focus:outline-none" placeholder="Serach" />
            </div> */}

            <Link to="/" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-15px ml-4 text-gray-200">Home</span>
            </Link>
            <Link to="/about" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-15px ml-4 text-gray-200">About</span>
            </Link>
            <hr className="my-4 text-gray-600" />
            <Link to="/portfolio" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-envelope-fill"></i>
              <span className="text-15px ml-4 text-gray-200">Portfolio</span>
            </Link>
            <Link to="/experience" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-envelope-fill"></i>
              <span className="text-15px ml-4 text-gray-200">Experience</span>
            </Link>
            <Link to="/contact" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
              <i className="bi bi-chat-left-text-fill"></i>
              <div className="flex justify-between w-full items-center" onClick={dropDown}>
                <span className="text-15px ml-4 text-gray-200">Contact</span>
                <span className="text-sm rotate-180" id="arrow">
                  <i className="bi bi-chevron-down"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

