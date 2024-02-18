// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import { TiThMenu } from "react-icons/ti";
 import { ImCross } from "react-icons/im";



function Sidebar() {
  const [sidebarLeft, setSidebarLeft] = useState(false);
  // <TiThMenu />

  // <ImCross />


  const openBar = () => {
    setSidebarLeft(!sidebarLeft);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <div className="bg-blue-600 font-Poppins">
        <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={openBar}>
        <TiThMenu className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={openBar} />
        </span>
        <div className={`sidebar fixed top-0 bottom-0 lg:left-0 ${sidebarLeft ? 'left-0' : '-left-300'} duration-1000 p-2 w-64 lg:w-300 overflow-y-auto text-center bg-orange-500 shadow h-screen`}>
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
              <ImCross className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={openBar} />
            </div>

            <hr className="my-10 text-gray-600" />

            <div>
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
                <span className="text-15px ml-4 text-gray-200">Contact</span>
              </Link>
              {/* <Link to="/earthpage" className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600">
                <i className="bi bi-chat-left-text-fill"></i>
                <span className="text-15px ml-4 text-gray-200">Earthpage</span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
