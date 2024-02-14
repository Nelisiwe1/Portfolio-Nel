function About() {
  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-10">
          <div className="md:flex-2 flex justify-center mb-6 md:mb-0">
            <img src="/assets/IMG-20231229-WA0033.jpg" alt="Neliswe Ngqeme" className="max-w-full h-auto" />
          </div>
          <div className="md:flex-3">
            <h1 className="text-3xl lg:text-5xl text-center lg:text-left lg-heading mb-4">
              About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="text-3xl md:text-5xl text-center md:text-left mb-6 md:mb-10">
              Let me share a few things About me 
            </h2>
            <div className="text-sm md:text-base text-justify md:text-left mb-6 md:mb-10">
              I'm Nelisiwe Ngqeme, an IT enthusiast currently pursuing an advanced diploma in App Development after completing my IT diploma. I find immense joy in turning ideas into functional applications and am deeply passionate about learning and growing in this dynamic field. While I'm not yet a seasoned professional, my journey so far has equipped me with a strong foundation in app development, problem-solving, and a commitment to continuous learning. I'm excited about the possibilities this advanced diploma offers, focusing on mastering programming languages and exploring cutting-edge methodologies. Outside the IT world, I enjoy staying curious about technology's impact on society. Let's connect on LinkedIn to explore opportunities and share insights on our tech journeys.
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

