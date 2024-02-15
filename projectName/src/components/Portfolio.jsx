import React from 'react';

function Portfolio() {
  return (
    <main id="work" className="py-12 px-4 lg:ml-64"> {/* Adding lg:ml-64 for larger screens to move content to the left */}
      <h1 className="text-4xl lg:text-6xl lg-heading">
        My{' '}
        <span className="text-secondary">Projects</span>
      </h1>
      <h2 className="text-xl lg:text-2xl sm-heading mt-4"> {/* Adding mt-4 to increase space between headings and projects */}
        Check out some of my projects...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="item flex flex-col items-center">
  <a href="#" className="relative">
    <img
      src="project1.jpg"
      alt="Project"
      className="w-full h-auto border-3 border-white transition-opacity hover:opacity-50 hover:border-yellow-400"
    />
    <div className="absolute w-full left-0 right-0 flex justify-center pb-2">
    <a
        href="#"
        className="btn-dark px-2 py-1 bg-gray-800 text-white transition duration-300 ease-in-out hover:bg-gray-700 w-full"
      >
        <i className="fab fa-github mr-2"></i> Github
      </a>
    </div>
  </a>
</div>
              <div className="item flex flex-col items-center">
  <a href="#" className="relative">
    <img
      src="project2.jpg"
      alt="Project"
      className="w-full h-auto border-3 border-white transition-opacity hover:opacity-50 hover:border-yellow-400"
    />
    <div className="absolute w-full left-0 right-0 flex justify-center pb-2">
    <a
        href="#"
        className="btn-dark px-2 py-1 bg-gray-800 text-white transition duration-300 ease-in-out hover:bg-gray-700 w-full"
      >
        <i className="fab fa-github mr-2"></i> Github
      </a>
    </div>
  </a>
</div>
        <div className="item flex flex-col items-center">
  <a href="#" className="relative">
    <img
      src="project3.jpg"
      alt="Project"
      className="w-full h-auto border-3 border-white transition-opacity hover:opacity-50 hover:border-yellow-400"
    />
    <div className="absolute w-full left-0 right-0 flex justify-center pb-2">
    <a
        href="#"
        className="btn-dark px-2 py-1 bg-gray-800 text-white transition duration-300 ease-in-out hover:bg-gray-700 w-full"
      >
        <i className="fab fa-github mr-2"></i> Github
      </a>
    </div>
  </a>
</div>

              <div className="item flex flex-col items-center">
  <a href="#" className="relative">
    <img
      src="project4.jpg"
      alt="Project"
      className="w-full h-auto border-3 border-white transition-opacity hover:opacity-50 hover:border-yellow-400"
    />
    <div className="absolute w-full left-0 right-0 flex justify-center pb-2">
    <a
        href="#"
        className="btn-dark px-2 py-1 bg-gray-800 text-white transition duration-300 ease-in-out hover:bg-gray-700 w-full"
      >
        <i className="fab fa-github mr-2"></i> Github
      </a>
    </div>
  </a>
</div>
      </div>
    </main>
  );
}

export default Portfolio;

