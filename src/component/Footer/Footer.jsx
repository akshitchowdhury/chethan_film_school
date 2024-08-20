import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <footer className="bg-zinc-950 py-12 lg:h-[460px] md:h-[460px]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="text-white">
            
            <h1 className=" text-xl lg:text-3xl md:text-3xl text-left font-semibold ">ABOUT CHETHAN FILM SCHOOL</h1>
            <img src={logo} className="h-[130px] w-[120px]"/>
            <p className="mb-4 text-left my-2">
            Established in 2010, Chethan Film Schools has quickly become one of the leading acting schools in Bangalore.
            </p>
            
            <div className="flex space-x-10 lg:my-1 md:my-12">
              {[faFacebook, faInstagram, faTwitter, faWhatsapp].map((icon, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={icon}
                  className="text-2xl hover:text-red-600 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-white">
            <h3 className="font-semibold text-xl lg:text-3xl md:text-3xl text-center mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Careers', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    onClick={handleClick}
                    className="hover:text-red-600 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="text-white">
            <h3 className="text-xl lg:text-3xl md:text-3xl font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-600 mt-1 mr-2" />
                <span className="text-left">53/3, Nagavarapalya Main Rd, Rajana Colony, C V Raman Nagar, Bengaluru, Karnataka 560093</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMobileAlt} className="text-red-600 mr-2" />
                <span>+91-98459 56633</span>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-red-600 mr-2" />
                <a href="mailto:chethancinemas@example.com" className="hover:text-red-600 transition duration-300">
                  chethancinemas@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact Form */}
          <div className="text-white">
            <h3 className="text-xl lg:text-3xl md:text-3xl font-semibold mb-4">QUICK CONTACT</h3>
            <form>
              {['Name', 'Email', 'Phone'].map((field, index) => (
                <input
                  key={index}
                  type={field === 'Email' ? 'email' : 'text'}
                  placeholder={field}
                  className="w-full p-2 mb-4 bg-gray-800 text-gray-300 rounded focus:outline-none"
                />
              ))}
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
      </div>
    </footer>
  );
};

export default Footer;