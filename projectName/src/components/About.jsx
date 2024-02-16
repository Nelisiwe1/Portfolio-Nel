import React from 'react';

function About() {
  return (
    <div className="py-10 md:py-10">
    <div className="container mx-auto lg:ml-64">
      {/* Your content goes here */}
  
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
      <div className="flex justify-center mb-6 md:mb-4 ml-auto md:ml-8">
    <img src="IMG-20231229-WA0033.jpg" className="w-96 h-auto object-cover" alt="Neliswe Ngqeme" />
</div>





<div className="md:flex-3">
            <div className="text-center md:text-left">
              <div>
              <h1 className="text-3xl lg:text-5xl lg-heading mb-4">
                About <span className="text-secondary">Me</span>
              </h1>
              </div>
              <h4 className="text-3xl md:text-5xl mb-6 md:mb-10">
                Let me share a few things About me
              </h4>
              <div className="flex justify-center">
  <div className="w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2">
    <p className="text-gray-500 dark:text-gray-400">
      I'm Nelisiwe Ngqeme, an IT enthusiast currently pursuing an advanced diploma in App Development after completing my IT diploma. I find immense joy in turning ideas into functional applications and am deeply passionate about learning and growing in this dynamic field. While I'm not yet a seasoned professional, my journey so far has equipped me with a strong foundation in app development, problem-solving, and a commitment to continuous learning. I'm excited about the possibilities this advanced diploma offers, focusing on mastering programming languages and exploring cutting-edge methodologies. Outside the IT world, I enjoy staying curious about technology's impact on society. Let's connect on LinkedIn to explore opportunities and share insights on our tech journeys.
    </p>
  </div>
</div>
              <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Connect on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto mt-12 p-6 bg-gray-50 text-gray rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6">My Skills</h1>
        <ul>
          <li className="mb-4">
            <p className="text-lg">HTML</p>
            <div className="bar bg-orange-500 h-4 rounded-full relative">
              <span className="html absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-50"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">CSS</p>
            <div className="bar bg-orange-500 h-4 rounded-full relative">
              <span className="css absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">JavaScript</p>
            <div className="bar bg-orange-500 h-4 rounded-full relative">
              <span className="javascript absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
          <li className="mb-4">
            <p className="text-lg">Java</p>
            <div className="bar bg-orange-500 h-4 rounded-full relative">
              <span className="java absolute top-0 left-0 bg-gradient-to-r from-pink-500 to-purple-500 h-full"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
