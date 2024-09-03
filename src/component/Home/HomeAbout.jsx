import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeAbout = () => {
  const urls = [
    "https://tentcinema.com/wp-content/uploads/2024/01/Untitled-design-8.jpg",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5294.jpg",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5261.jpg",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5216.jpg",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5143.jpg",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4840.png",
    "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4584-scaled.jpg",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Section - Carousel */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            interval={3000}
            className="rounded-lg shadow-lg"
          >
            {urls.map((url, index) => (
              <div key={index}>
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-full h-96"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full lg:w-1/2 text-justify">
          <h3 className="text-red-600 text-xl font-semibold mb-4 flex items-center">
            About
            <span className="ml-2 px-2 py-1 bg-amber-400 text-white rounded">
              Chethan Film School
            </span>
            <span className="ml-2 w-10 h-[2px] bg-red-600"></span>
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-red-500">Chethan Film School</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Established in 2010, Chethan Film Schools has quickly become one of the
            <span className="font-bold text-red-500"> leading acting schools in Bangalore.</span>
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Founded by renowned director Chethan Jodidhar, the school aims to cultivate the next generation of talented actors, directors, and technicians in the film industry.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            The school offers a variety of programs, including advanced acting courses, intensive filmmaking workshops, and specialized training in areas such as Screenwriting, Cinematography, and Film Production.
          </p>
          <Link to="/about">
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomeAbout;
