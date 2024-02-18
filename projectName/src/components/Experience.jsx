import React from 'react';
// import './styles.css'; // Import your Tailwind CSS styles

const Experience = () => {
    return (
        <div className="container mx-auto mt-10 pl-10">
            <h2 className="text-2xl font-bold mb-4">Experience & Education</h2>
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Education 1
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Education 2
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Education 3
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Experience 1
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Experience 2
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Experience 3
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Certification 1
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Certification 2
                    </div>
                    <div className="w-24 h-24 bg-gray-300 border-2 border-black rounded-md flex justify-center items-center mb-4">
                        Certification 3
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
