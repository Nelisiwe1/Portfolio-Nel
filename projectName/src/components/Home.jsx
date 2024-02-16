import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

function Home() {
    return (
<section className="home flex items-center justify-center flex-wrap gap-6 bg-fixed bg-cover" style={{backgroundImage: `url("/background.jpg")`}}>
            <main className="flex flex-1">
                <div className="image flex-1 flex-shrink-0 md:w-96">
                    <img src="/assets/path_to_your_image.jpg" alt="Background" className="w-full h-screen" />
                </div>
                <div className="content flex-1 flex-shrink-0 md:w-96 flex flex-col justify-center items-start ml-4">
                    <h3 className="text-4xl text-white uppercase mb-4"><span className="text-main-color">Nelisiwe Ngqeme</span></h3>
                    <div className="info text-2xl text-white py-2">Software Developer</div>
                    <div className="text text-1.7rem text-gray-600 py-2"></div>
                    <div className="flex space-x-4">
      <FaGithubSquare className="w-8 h-8 text-gray-500" />
      <FaLinkedin className="w-8 h-8 text-gray-500" />
      <AiFillTwitterCircle className="w-8 h-8 text-gray-500" />
    </div>
  

                </div>
                
            </main>
        </section>
    );
}

export default Home;
