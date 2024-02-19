// import React from 'react';
// import ProjectCard from './projectcard';

// const Portfolio = () => {
//   return (
//     <div className="flex flex-wrap justify-center ml-96">
//       <ProjectCard
//         title="Project 1"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         imageUrl="project4.jpg"
//         githubLink="https://github.com/example/project1"
//       />
//       <ProjectCard
//         title="Project 2"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         imageUrl="project3.jpg"
//         githubLink="https://github.com/example/project2"
//       />
//       {/* Add more ProjectCard components for additional projects */}
//       {/* <ProjectCard
//         title="Project 3"
//         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//         imageUrl="https://via.placeholder.com/300"
//         githubLink="https://github.com/example/project1"
//       /> */}
//     </div>
//   );
// };

// export default Portfolio;
// ``

import React from 'react'

const Portfolio = () => {
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

export default Portfolio
