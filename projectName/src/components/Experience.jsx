import React from 'react';
// import './styles.css'; // Import your Tailwind CSS styles

const Experience = () => {
    return (
        <section className="home flex items-center justify-center flex-wrap gap-6 bg-fixed bg-cover" style={{backgroundImage: `url("/682.jpg")`}}>
            <div className="image flex-1 flex-shrink-0 md:w-96">
                <img src="/assets/path_to_your_image.jpg" alt="Background" className="w-full h-screen" />
            </div>
            <div className="flex justify-center w-full max-w-4xl mx-auto">
                {/* Boxes on the left side */}
                <div className="w-24 h-24 bg-gray-500 m-4"></div>
                <div className="w-24 h-24 bg-gray-500 m-4"></div>
                
                {/* Timeline */}
                <div className="flex flex-wrap justify-center w-full max-w-xs mx-auto mb-8">
                    <div className="relative wrap overflow-hidden p-10 h-full">
                        {/* Education Timeline */}
                        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-0" />
                        
                        {/* Education */}
                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                            <div className="order-1 w-5/12"></div>
                            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                            </div>
                            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                <h3 className="mb-3 font-bold text-white text-xl">Education</h3>
                                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                                    Your educational experience here...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Boxes on the right side */}
                <div className="w-24 h-24 bg-gray-500 m-4"></div>
                <div className="w-24 h-24 bg-gray-500 m-4"></div>
            </div>
        </section>
    );
}

export default Experience;
