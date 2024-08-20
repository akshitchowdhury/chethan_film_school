import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterBottom = () => {
  return (
    <div className="bg-gradient-to-r from-amber-400 to-amber-700  lg:h-[50px]">
      <div className="container -mx-9 md:mx-auto flex py-3 flex-wrap items-center justify-between px-4">
        
        <div className="topbar-left w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-start ">
          <ul className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <li className="flex items-center text-black hover:text-amber-50 transition ease-in-out duration-300">
              <FontAwesomeIcon icon={faEnvelope} className='px-2'/>
              <a href="mailto:chethanconstructions.in" className="">
                chethancinemas.com
              </a>
            </li>
            <li className="flex items-center mt-2 sm:mt-0 cursor-pointer text-black hover:text-amber-50 transition ease-in-out duration-300">
              <FontAwesomeIcon icon={faMobileAlt} className='px-2'/>
              <span>+91-98459 56633</span>
            </li>
          </ul>
        </div>
        
        <div className="topbar-right w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
          <ul className="flex items-center  space-x-4">
            <li className="flex items-center  text-black hover:text-amber-50 transition ease-in-out duration-300">
              <FontAwesomeIcon icon={faInstagram} className='px-2'/>
            </li>
            <li className="flex items-center  text-black hover:text-amber-50 transition ease-in-out duration-300">
              <FontAwesomeIcon icon={faFacebook} className='px-2'/>
            </li>
            <li className="flex items-center  text-black hover:text-amber-50 transition ease-in-out duration-300">
              <FontAwesomeIcon icon={faWhatsapp} className='px-2'/>
            </li>
          </ul>
        </div>
     
      </div>
    </div>
  )
}

export default FooterBottom;
