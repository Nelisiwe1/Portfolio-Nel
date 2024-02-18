import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Homebackground from './Homebackground';

function Home() {
    return (
        <section style={{ position: 'relative' }}>
            <Homebackground/>

            <div className="content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 1 }}>
                <h3 className="text-4xl text-white uppercase mb-4 font-3d">
                    <span className="text-main-color">Nelisiwe Ngqeme</span>
                </h3>
                <div className="info text-2xl text-white py-2">Software Developer</div>
  
                <div className="flex justify-center space-x-4">
                    <FaGithubSquare className="w-8 h-8 text-gray-500" />
                    <FaLinkedin className="w-8 h-8 text-gray-500" />
                    <AiFillTwitterCircle className="w-8 h-8 text-gray-500" />
                </div>
            </div>
        </section>
    );
}

export default Home;
