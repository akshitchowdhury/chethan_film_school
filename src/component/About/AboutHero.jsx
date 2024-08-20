import React from 'react'
import aboutBg from "../../assets/aboutBg.jpg"
const AboutHero = () => {
  return (
    
      <div className='relative w-full h-[250px]' >
  <img src={aboutBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  <div className='absolute inset-0 bg-blue-400 opacity-40'></div>
</div>
    
  )
}

export default AboutHero
