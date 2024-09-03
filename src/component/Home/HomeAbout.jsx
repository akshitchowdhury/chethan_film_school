import React from 'react';

const HomeAbout = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Section - Video/Image Placeholder */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-inherit">
            {/* Placeholder for Video/Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className=" rounded-none p-4">
                <img src='https://tentcinema.com/wp-content/uploads/2023/12/RY9A5294.jpg'/>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-red-600 text-xl font-semibold mb-2">
            About Chethan Film Schools <span className="inline-block w-10 h-[2px] bg-red-600 align-middle ml-2"></span>
          </h3>
          <h2 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4">
            Welcome to <span className='text-5xl text-red-500'>Chethan Film School</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Established in 2010, Chethan Film Schools has quickly become one of the <span className="font-bold text-red-500">leading acting schools in Bangalore.</span>
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Founded by renowned director Chethan Jodidhar, the school aims to cultivate the next generation of talented actors, directors, and technicians in the film industry.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The school offers a variety of programs, including advanced acting courses, intensive filmmaking workshops, and specialized training in areas such as Screenwriting, Cinematography, and Film Production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
