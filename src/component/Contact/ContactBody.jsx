import { faGlobeAsia, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import contact from "../../assets/Designer.jpeg"
const ContactBody = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-700 to-amber-200  p-10">
      <div className="container mx-auto">
        <div className="pb-16">
          <div className="text-left mb-8">
            <h2 className="text-4xl font-semibold mb-4 text-gray-100">CONTACT INFORMATION</h2>
            <div className='w-[500px] h-[2px] bg-gray-500'></div>
            <p className="text-gray-100 mt-4 ">
              Partner with Chethan for reliable, safe, and high-quality service delivery across India. 
            </p>
            <p className='text-gray-100 '>
            Contact us today
            to discuss your demolition, excavation, or site preparation needs.
            </p>
          </div>
          <img src={contact} className='h-[300px] my-6'/>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="flex-1 lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-8">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faMapMarkerAlt} />
                </div>
                <div>
                  <p className="text-gray-100 text-left">53/3, Nagavarapalya Main Rd, Rajana Colony, C V Raman Nagar, Bengaluru, Karnataka 560093</p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faMobileAlt} />
                </div>
                <div>
                  <p className="text-gray-100"><a href="tel:+00124568365987" className="hover:underline">+91-98459 56633</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl text-gray-100 mr-4">
                  <FontAwesomeIcon className='text-amber-400' icon={faGlobeAsia} />
                </div>
                <div>
                  <p className="text-gray-100"><a href="mailto:infor@example.com" className="hover:underline">chethancinemas.com</a></p>
                  {/* <p className="text-gray-100"><a href="http://www.example.com" className="hover:underline" target="_blank" rel="noopener noreferrer">www.example.com</a></p> */}
                </div>
              </div>
            </div>
            <div className="flex-1 lg:w-1/2 md:-my-[400px] lg:-my-[400px]">
              <h2 className="text-4xl font-semibold text-center mb-8 text-gray-100">SEND US A MESSAGE</h2>
              <div className="max-w-xl mx-auto">
                <form id="contact-form" action="https://whizthemes.com/nazmul/php/mail.php" method="post">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                      <label className="mb-2 font-medium text-gray-100">Your Name*</label>
                      <input type="text" name="name" className="border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-medium text-gray-100">Your Email*</label>
                      <input type="email" name="email" className="border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-medium text-gray-100">Subject*</label>
                      <input type="text" name="subject" className="border border-gray-300 p-2 rounded" />
                    </div>
                    <div className="flex flex-col">
                      <label className="mb-2 font-medium text-gray-100">Message*</label>
                      <textarea name="message" className="border border-gray-300 p-2 rounded" rows="6"></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">SEND NOW</button>
                    </div>
                  </div>
                </form>
                <div className="form-output mt-4 text-center">
                  <p className="form-message"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactBody;
