import React from 'react';

function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="text-3xl text-center mt-6 mb-4">Contact</h1>
            <div className="flex items-center justify-center flex-wrap gap-6 bg-fixed bg-cover" style={{backgroundImage: `url("/5535279.jpg")`}}>
                <div className="image flex-1 flex-shrink-0 md:w-96">
                    <img src="/assets/path_to_your_image.jpg" alt="Background" className="w-full h-screen" />
                </div>

                <div className="icons-container flex flex-col items-left mb-6 ml-8 mt-4">
                    <div className="icons-container flex flex-col items-center space-y-6 mb-6 ml-4">
                        <div className="icons text-center">
                            <i className="fas fa-envelope text-blue-500 text-xl mb-2"></i>
                            <h3 className="text-lg font-semibold">my email</h3>
                            <p>nelisiwengqeme3@gmail.com</p>
                        </div>
                        <div className="icons text-center">
                            <i className="fas fa-phone text-blue-500 text-xl mb-2"></i>
                            <h3 className="text-lg font-semibold">my number</h3>
                            <p>+27 69 422 6621</p>
                        </div>
                        <div className="icons text-center">
                            <i className="fas fa-map-marker-alt text-blue-500 text-xl mb-2"></i>
                            <h3 className="text-lg font-semibold">my address</h3>
                            <p>1941 Bhele Street, Daveyton 1520</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto p-2 bg-gradient-to-r from-white-900 to-blue-600 border border-orange-700 shadow-lg max-w-md">
                    <form className="form border-2">
                        <div className="descr text-center text-white text-lg font-semibold my-4">Send Message</div>

                        <div className="input mb-2">
                            <input required autoComplete="off" type="text" className="input-field text-white bg-transparent border-b-2 border-blue-400 focus:outline-none focus:border-blue-700" id="name" />
                            <label htmlFor="name" className="input-label text-white">Name</label>
                        </div>

                        <div className="input mb-2">
                            <input required autoComplete="off" name="email" type="email" className="input-field text-white bg-transparent border-b-2 border-blue-400 focus:outline-none focus:border-blue-700" id="email" />
                            <label htmlFor="email" className="input-label text-white">E-mail</label>
                        </div>

                        <div className="input mb-2">
                            <textarea required cols="30" rows="4" id="message" className="input-field text-white bg-transparent border-b-2 border-blue-400 focus:outline-none focus:border-blue-700"></textarea>
                            <label htmlFor="message" className="input-label text-white">Message</label>
                        </div>

                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send message →</button>
                    </form>
                </div>
            </div>

            <footer className="text-center text-gray-600 text-sm mt-6"> Designed by Nelisiwe 2023</footer>
        </div>
    );
}

export default Contact;
