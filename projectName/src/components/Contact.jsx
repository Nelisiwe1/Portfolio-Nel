import React from 'react';


function Contact() {
    return (
        <section className="contact bg-gray-200 py-8" id="contact">
            <h1 className="heading mb-6"> contact <span> me </span> </h1>
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
            <div className="container mx-auto p-4 bg-gradient-to-r from-blue-900 to-blue-600 rounded-md border border-blue-700 shadow-lg">
      <form className="form">
        <div className="descr text-center text-white text-lg font-semibold my-6">Send Message</div>

        <div className="input">
          <input required autoComplete="off" type="text" className="input-field" id="name" />
          <label htmlFor="name" className="input-label">Name</label>
        </div>

        <div className="input">
          <input required autoComplete="off" name="email" type="text" className="input-field" id="email" />
          <label htmlFor="email" className="input-label">E-mail</label>
        </div>

        <div className="input">
          <textarea required cols="30" rows="1" id="message" className="input-field"></textarea>
          <label htmlFor="message" className="input-label">Message</label>
        </div>

        <button className="btn">Send message →</button>
      </form>
            </div>
            <footer className="text-center text-gray-600 text-sm mt-6"> Designed by Nelisiwe 2023</footer>
            
        </section>
    );
}

export default Contact;


