import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import h1 from "../../assets/homeBg1.jpg";
import h2 from "../../assets/homeBg2.jpg"
import h3 from "../../assets/homeBg3.jpg";

import HomeHeroText from './HomeHeroText';

const HomeHero = () => {
  return (
    <>  
     <div className="relative w-auto md:w-full h-[300px] md:h-[500px] lg:h-[500px] ">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
      >
        <div className="relative">
          <img src={h1} alt="Slide 1" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className="absolute inset-0 bg-zinc-700 opacity-50"></div>
        </div>
        <div className="relative">
          <img src={h2} alt="Slide 2" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className="absolute inset-0 bg-zinc-700 opacity-50"></div>
        </div>
        <div className="relative">
          <img src={h3} alt="Slide 3" className="object-cover object-top w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className="absolute inset-0 bg-zinc-700 opacity-50"></div>
        </div>
        {/* <div className="relative">
          <img src={h4} alt="Slide 4" className="object-cover object-center w-full h-[300px] md:h-[500px] lg:h-[500px]" />
          <div className="absolute inset-0 bg-zinc-700 opacity-50"></div>
        </div> */}
        
      </Carousel>
    </div>
    
    <HomeHeroText/>
    </>

  );
};

export default HomeHero;
