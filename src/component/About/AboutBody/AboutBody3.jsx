import React from 'react';
import aboutimg from "../../../assets/Designer.jpeg"
const AboutBody3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 bg-gray-50">
      <div className="md:w-2/3">
        <img 
          src={aboutimg} 
          alt="Group photo of students" 
          className="w-full rounded-lg mb-4"
        />
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-3xl text-left font-bold mb-4">Our Story</h2>
          <p className="text-lg text-left">
            Chethan Film School was founded with a vision of nurturing creativity and 
            excellence in the world of cinema. We aim to be the premier institution for 
            aspiring filmmakers, offering comprehensive programs in various aspects of 
            film production. Our state-of-the-art facilities and industry-experienced 
            faculty provide students with the perfect environment to hone their skills 
            and bring their cinematic visions to life.
          </p>
        </div>
      </div>
      <div className="md:w-1/3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
          <form>
            <input className="w-full p-3 mb-3 border rounded" type="text" placeholder="Your name" />
            <input className="w-full p-3 mb-3 border rounded" type="email" placeholder="Your email" />
            <input className="w-full p-3 mb-3 border rounded" type="tel" placeholder="Phone No." />
            <h3 className="font-bold mb-2">Course of Interest</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
  "Film Making Course",
  "Film Making Course",
  "Editing and Visual Effects (VFX)",
  "Sound Design and Audio Production",
  "Workshops and Crash Courses",
  "Online Training and Coaching"
].map((course) => (
                <label key={course} className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-left">{course}</span>
                </label>
              ))}
            </div>
            <button className="w-full bg-red-600 text-white p-3 rounded mt-4 hover:bg-red-700 transition duration-300">
              Apply Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutBody3;