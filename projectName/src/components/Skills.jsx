import React from 'react';

class Skills extends React.Component {
  render() {
    return (
        <div className="max-w-md mx-auto mt-12 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6">My Skills</h1>
        <ul>
          <li className="mb-4">
            <p className="text-lg">HTML</p>
            <div className="bar bg-blue-500 h-4 rounded-full relative">
              <span className="html absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-50"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">CSS</p>
            <div className="bar bg-blue-500 h-4 rounded-full relative">
              <span className="css absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">JavaScript</p>
            <div className="bar bg-blue-500 h-4 rounded-full relative">
              <span className="javascript absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">Java</p>
            <div className="bar bg-blue-500 h-4 rounded-full relative">
              <span className="java absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;



