import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">ABOUT TENT CINEMA</h2>
          <p className="text-gray-400 mb-4">
            Tent Cinema Film School Is Located In Bangalore. It Is Yet Another Successful Initiative Of Renowned Writer And Filmmaker Dr. Nagathihalli Chandrashekhar To Introduce Fresh Artists And Technicians Into The Industry.
          </p>
          <h3 className="font-semibold mb-2">Opening Hour:</h3>
          <p className="text-gray-400">Monday to Sunday</p>
          <p className="text-gray-400">9:30 am – 6 pm</p>
        </div>
        
        {/* Contact Information Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-400 mb-4 text-center">
          4, N S Iyengar St,
          <br/> 4th Block, Kumara Park West, 
          <br/>Seshadripuram,
          <br/> Bengaluru, Karnataka 560020
          </p>
          <div className="flex items-center mb-2">
            <i className="fas fa-phone mr-2"></i>
            <p className="text-gray-400">+91 99005 55255 <br /> +91 74116 18663</p>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2"></i>
            <p className="text-gray-400">tentcinema.school@gmail.com</p>
          </div>
          <div className="flex items-center">
            <i className="fas fa-fax mr-2"></i>
            <p className="text-gray-400">080 26712230</p>
          </div>
        </div>
        
        {/* Quick Contact Form Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">QUICK CONTACT</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 p-2 rounded text-white hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
