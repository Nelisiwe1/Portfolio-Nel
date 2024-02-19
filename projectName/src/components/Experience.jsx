import React from 'react';

const Experience = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Experience</h1>

            {/* Education Timeline */}
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-center w-full max-w-xs mx-auto mb-8 display-grid">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        {/* Education Timeline Border */}
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-0" />

                        {/* Education Boxes */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-2xl rounded-full w-8 h-8 transform rotate-45">
                                
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">Dinoto Technical Secondary</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        Matric
                                        <br />
                                        2015 - 2018
                                    </p>
                                </div>
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">Vaal University Technical Secondary School</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        National Diploma in Information Technology
                                        <br />
                                        2015 - 2018
                                    </p>
                                </div>
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">Cape Peninsula University of Technology</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        Advanced Diploma in ICT in Application Development
                                        <br />
                                        2015 - 2018
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Timeline */}
            <div className="flex flex-col">
                <div className="flex flex-wrap justify-center w-full max-w-xs mx-auto mb-8">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        {/* Experience Timeline Border */}
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-0" />

                        {/* Experience Boxes */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-2xl rounded-full w-8 h-8 transform rotate-45">
                              
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">CapaCiTi Tech Accelerator</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        Software development Intern
                                        <br />
                                        2023 - 2024
                                    </p>
                                </div>
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">SAIS23</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                        Volunteer
                                        <br />
                                        2023-2023(3 days)
                                    </p>
                                </div>
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-full px-6 py-4"> {/* Changed w-50 to w-full */}
                                    <h3 className="mb-3 font-bold text-white text-xl">Younglings Africa</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                       Software development Intern
                                       <br />
                                       2024 - present
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
