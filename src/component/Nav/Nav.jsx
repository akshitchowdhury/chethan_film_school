import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavTop from './NavTop/NavTop';
import logo from "../../assets/logo.png"
// import ServicesDropdown from './ServicesDropdown/ServicesDropdown';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top:"0" });
  };

  return (
    <>
    <NavTop/>
    <nav className="bg-gray-950 lg:bg-zinc-950 p-4  ">
      <div className="container mx-auto md:h-[80px] lg:h-[60px] flex justify-between items-center">
        <div className="font-bold flex flex-row items-center">
            <img src={logo} className='w-[120px] h-[100px] py-2'/>
            
        </div>
        <div className="hidden md:flex space-x-24">
  <Link 
    to="/" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    HOME
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
  <Link 
    to="/about" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    ABOUT
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
  
  {/* <Link 
    to="/services" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    SERVICES
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link> */}

  {/* <ServicesDropdown/> */}
  {/* <Link 
    to="/gallery" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    GALLERY
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link> */}
  <Link 
    to="/alumni" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    Alumni
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
  <Link 
    to="/faq" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    FAQ
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
  <Link 
    to="/contact" 
    className="text-zinc-50 font-medium relative hover:hover:text-gray-50 group"
  >
    CONTACT US
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </Link>
</div>

        <div className="md:hidden flex items-center p-12">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link onClick={ handleClick} to="/" className="block text-white hover:text-gray-300 p-2">Home</Link>
          <Link onClick={ handleClick} to="/about" className="block text-white hover:text-gray-300 p-2">About</Link>
          <Link onClick={ handleClick} to="/services" className="block text-white hover:text-gray-300 p-2">Services</Link>
          <Link onClick={ handleClick} to="/gallery" className="block text-white hover:text-gray-300 p-2">Gallery</Link>
          <Link onClick={ handleClick} to="/contact" className="block text-white hover:text-gray-300 p-2">Contact Us</Link>
        </div>
      )}
    </nav>
    </>
  );
};

export default Nav;
