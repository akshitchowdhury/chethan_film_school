import React from 'react'
import contactBg from "../../assets/aboutBg.jpg"
const ContactHero = () => {
  return (
    
    <div className="relative w-full h-[250px] overflow-hidden">
    <img 
      src={contactBg} 
      className="object-cover w-full h-full mix-blend-multiply"
      alt="Background Image"
    />
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent backdrop-blur-sm"></div>
    
    
    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
  </div>
  
  )
}

export default ContactHero
