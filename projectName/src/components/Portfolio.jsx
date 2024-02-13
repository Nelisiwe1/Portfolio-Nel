import React from 'react';


function Portfolio() {
  return (
    <main id="work" className="py-12 px-4">
      <h1 className="text-4xl lg:text-6xl lg-heading">
        My{' '}
        <span className="text-secondary">Work</span>
      </h1>
      <h2 className="text-xl lg:text-2xl sm-heading">
        Check out some of my projects...
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <div className="item">
          <a href="">
            <img
              src="img/Projects/project2.jpg"
              alt="Project"
              className="w-full h-auto"
            />
          </a>
          <a
            href=""
            className="btn-dark inline-block mt-2"
          >
            <i className="fab fa-github mr-2"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="">
            <img
              src="img/Projects/project1.jpg"
              alt="Project"
              className="w-full h-auto"
            />
          </a>
          <a
            href=""
            className="btn-dark inline-block mt-2"
          >
            <i className="fab fa-github mr-2"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img
              src="img/Projects/project3.jpg"
              alt="Project"
              className="w-full h-auto"
            />
          </a>
          <a href="#" className="btn-dark inline-block mt-2">
            <i className="fab fa-github mr-2"></i> Github
          </a>
        </div>
        <div className="item">
          <a href="#!">
            <img
              src="img/Projects/project4.jpg"
              alt="Project"
              className="w-full h-auto"
            />
          </a>
          <a href="#" className="btn-dark inline-block mt-2">
            <i className="fab fa-github mr-2"></i> Github
          </a>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
