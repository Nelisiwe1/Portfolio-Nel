import React from 'react';

function About() {
    return (
        <div className="py-10 md:py-10">
            <div className="container mx-auto lg:ml-64" style={{ backgroundColor: 'white' }}>
                <div className="max-w-4xl mx-auto mt-12 flex">
                    <div className="w-1/2 pr-8">
                        <h1 className="text-3xl mb-6">About Me</h1>
                        <div className="text-gray-500 dark:text-gray-400">
                            <p>
                                I'm Nelisiwe Ngqeme, an IT enthusiast currently pursuing an advanced diploma in App Development after completing my IT diploma. I find immense joy in turning ideas into functional applications and am deeply passionate about learning and growing in this dynamic field. While I'm not yet a seasoned professional, my journey so far has equipped me with a strong foundation in app development, problem-solving, and a commitment to continuous learning. I'm excited about the possibilities this advanced diploma offers, focusing on mastering programming languages and exploring cutting-edge methodologies. Outside the IT world, I enjoy staying curious about technology's impact on society. Let's connect on LinkedIn to explore opportunities and share insights on our tech journeys.
                            </p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Connect on LinkedIn
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <img src="about.png" alt="Nelisiwe Ngqeme" className="w-80 h-88 border border-gray-300 rounded-lg" />
                    </div>
                </div>
                <div className="max-w-md mx-auto mt-12">
                    <h1 className="text-3xl mb-6">My Skills</h1>
                    <ul>
                        <li className="mb-4">
                            <p className="text-lg">HTML</p>
                        </li>
                        <li className="mb-4">
                            <p className="text-lg">CSS</p>
                        </li>
                        <li className="mb-4">
                            <p className="text-lg">JavaScript</p>
                        </li>
                        <li className="mb-4">
                            <p className="text-lg">Java</p>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
