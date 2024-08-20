import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ServicesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li 
        className="relative group text-left z-50"  
        onMouseEnter={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)}
      >
         <Link 
    to="/services" 
    className="text-zinc-50 font-medium relative hover:text-gray-50 group"
  >
          COURSES
          <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg 
           py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <Link to={"/filmaking"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
                Film Making course
              </Link>
            </li>
            <li>
            <Link to={"/acting"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
              Intensive Acting Course
              </Link>
            </li>
            <li>
            <Link to={"/editing"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
                Editing and Visual Effects
              </Link>
            </li>
            <li>
            <Link to={"/sound"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
            Sound Design and Audio Production
              </Link>
            </li>
            <li>
            <Link to={"/workshop"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
            Workshops and Crash Courses
              </Link>
            </li>
            <li>
            <Link to={"/online"} className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
            Online Training and Coaching
              </Link>
            </li>
           
          </ul>
        )}
      </li>
    );
}

export default ServicesDropdown