import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroText = () => {
  return (
    <div className="container absolute -my-[70%] lg:-my-[7%] md:my-[30%] md:labsolute md:top-0
     lg:absolute lg:right-96 lg:top-[300px]">
      <div className="text-left px-4 md:mx-[25%] lg:mx-[35%] md:w-[auto] w-auto lg:w-[1000px]">

        <h1 className="text-lg text-white font-semibold mb-2 md:text-3xl lg:text-xl">
  CHETHAN <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">FILM SCHOOL</span>
</h1>
        <h1 className="text-3xl text-white font-semibold mb-2 md:text-5xl lg:text-8xl">
  Lights, Camera, <span className="bg-gradient-to-r from-amber-400 to-amber-700 bg-clip-text text-transparent">
  Education!
</span>

</h1>
        <p className="text-sm md:text-base  text-white lg:text-lg">
        Empowering Creative Visionaries
        </p>
        <p className='text-red-500 my-2 font-bold flex flex-wrap'>Your journey to becoming a filmmaker starts <br/>here</p>
        <Link to={"/contact"}>
        <button className="w-44 h-12 max-w-xs px-4 py-2  bg-gray-50  text-zinc-950 
        hover:text-white font-bold rounded-md
         shadow-md hover:bg-amber-400 focus:outline-none 
         focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50 transition duration-300 ease-in-out">
  
  Apply Now
  
  </button>
  </Link>
      </div>
    </div>
  );
};

export default HomeHeroText;
