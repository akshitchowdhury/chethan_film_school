import React from 'react';

const AboutBody2 = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <div className="container mx-auto px-7 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
          <h3 className="text-red-600 text-lg font-semibold mb-2">
            Learning Is Fun And Fulfilling <span className="inline-block w-10 h-[2px] bg-red-600 align-middle ml-2"></span>
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our approach at Chethan Film Schools is to start with the premise: there is an actor built-in to everyone; we are simply helping them rediscover their true artistic selves. Students are introduced to theater in simple but refreshing ways.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Nothing emerges from a textbook or a specific school of acting. Ideas from everyday life are thrown around in class: a cup of coffee, a rock, a well; and students are asked to mime it.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-semibold">
            Each student in the class becomes a character and a member of the audience, simultaneously. They are observing, as well as internalizing the world of characters around them. Because our students come from such varied backgrounds, we have an interesting give-and-take learning process in class.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Image Placeholder */}
            <img 
              src="/mnt/data/image.png" 
              alt="Our Approach" 
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-blue-200 rounded-full p-4">
                <svg 
                  className="w-10 h-10 text-blue-800" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11v4l3-2-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutBody2;
