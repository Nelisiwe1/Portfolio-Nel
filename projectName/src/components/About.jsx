function About() {
  return (
    <div className="py-10 md:py-">
      <div className="container mx-auto lg:ml-64"> 
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
          <div className="md:flex-2 flex justify-center ml-4 mb-6 md:mb-0">
            <img src="IMG-20231229-WA0033.jpg" className="w-50 h-80 object-cover absolute" alt="Neliswe Ngqeme" />
          </div>
          <div className="md:flex-3">
            <h1 className="text-3xl lg:text-5xl text-center lg:text-left lg-heading mb-4">
              About <span className="text-secondary">Me</span>
            </h1>
            <h4 className="text-3xl md:text-5xl text-center md:text-left mb-6 md:mb-10">
              Let me share a few things About me
            </h4>
            <div className="mb-3 text-left text-gray-500 dark:text-gray-400 relative right-0">
              <p className="absolute right-0 pl-9 float-left">I'm Nelisiwe Ngqeme, an IT enthusiast currently pursuing an advanced diploma in App Development after completing my IT diploma. I find immense joy in turning ideas into functional applications and am deeply passionate about learning and growing in this dynamic field. While I'm not yet a seasoned professional, my journey so far has equipped me with a strong foundation in app development, problem-solving, and a commitment to continuous learning. I'm excited about the possibilities this advanced diploma offers, focusing on mastering programming languages and exploring cutting-edge methodologies. Outside the IT world, I enjoy staying curious about technology's impact on society. Let's connect on LinkedIn to explore opportunities and share insights on our tech journeys.</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
