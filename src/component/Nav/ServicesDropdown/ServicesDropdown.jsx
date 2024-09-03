// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// const ServicesDropdown = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//       <p 
//         className="relative group text-center z-50 "  
         
//         // onMouseLeave={() => setIsOpen(false)}
//       >
//          <Link 
//     to="/services" 
//     onMouseEnter={() => setIsOpen(true)}
//     className="text-zinc-50 font-medium relative  hover:text-gray-50 group"
//   >
//           COURSES
//           <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//           </Link>
  
//         {/* Dropdown Menu */}
//         {isOpen && (
//           <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg 
//            py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <li>
//               <Link to={"/filmaking"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
//                 Film Making course
//               </Link>
//             </li>
//             <li>
//             <Link to={"/intense"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
//               Intensive Acting Course
//               </Link>
//             </li>
//             <li>
//             <Link to={"/editing"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
//                 Editing and Visual Effects
//               </Link>
//             </li>
//             <li>
//             <Link to={"/sound"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
//             Sound Design and Audio Production
//               </Link>
//             </li>
//             <li>
//             <Link to={"/workshop"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
//             Workshops and Crash Courses
//               </Link>
//             </li>
//             <li>
//             <Link to={"/online"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
//             Online Training and Coaching
//               </Link>
//             </li>
           
//           </ul>
//         )}
//       </p>
//     );
// }

// export default ServicesDropdown

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        className="cursor-pointer text-zinc-50 mx-2 md:mx-0
        md:uppercase md:font-medium relative hover:text-amber-400 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Courses
        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-amber-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </button>
  
      <div 
        className={`
          md:absolute md:left-0 md:mt-2 md:w-60 md:shadow-lg
          w-full overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100'}
        `}
      >
        <ul 
          className="bg-inherit md:bg-white py-2 text-left"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="about-menu"
        >
          {/* <li role="none">
            <Link 
              to="/aboutUs" 
              className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </li> */}
          <li>
          <Link 
              to="/filmaking" 
              className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-amber-400 hover:text-white transition-colors duration-200"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >  Film Making course
               </Link>
             </li>
             <li>
             <Link to={"/intense"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
               Intensive Acting Course
               </Link>
             </li>
             <li>
             <Link to={"/editing"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
             
                 Editing and Visual Effects
               </Link>
             </li>
             <li>
             <Link to={"/sound"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
             Sound Design and Audio Production
               </Link>
             </li>
            <li>
             <Link to={"/workshop"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
             Workshops and Crash Courses
               </Link>
             </li>
             <li>
             <Link to={"/online"} className="block px-4 py-2 text-gray-50 md:text-zinc-950 hover:bg-yellow-500 hover:text-white transition-colors duration-200">
              
             Online Training and Coaching
               </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}