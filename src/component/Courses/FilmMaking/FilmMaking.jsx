import React from 'react';
import banner from "../../../assets/filmMakingBanner.webp"
export default function FilmMaking() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:flex lg:items-start text-justify lg:space-x-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Overview of Film Making Course</h1>
          
          <p className="mb-4">
            This course at <span className="font-semibold text-xl text-red-600">Chethan Film Schools</span>, is ideal for both working professionals and students with a passion for acting. It provides an opportunity to nurture your natural acting talent while refining your skills, allowing you to balance your passion with your profession.
          </p>

          <p className="mb-6">
            Designed with flexibility in mind, the course lets you delve into the world of cinema at your own pace while offering a comprehensive learning experience.
          </p>

          <h2 className="text-3xl font-bold mb-6">Film Making Course</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Overview:</strong> Our Film Making course covers the entire spectrum of filmmaking, from conceptualization to distribution.</li>
            <li><strong>Subjects Covered:</strong> Scriptwriting, cinematography, editing, sound design, VFX, distribution strategies, and more.</li>
            <li><strong>Special Features:</strong> Practical shooting sessions, field trips, and hands-on experience with professional equipment.</li>
            <li><strong>Outcome:</strong> Participants develop skills to create professional-quality films and gain insights into industry practices.</li>
          </ul>
          <h2 className="text-3xl font-bold mb-6">What to Expect from this course</h2>
          <ul className="list-disc list-inside mb-6">
            <li>As a student, one is well prepared and confident to work in front of the camera; stage fear and fumbling with acting will become practically non-existent.</li>
            <li>Acting in a street play and the short film gives an opportunity to bring into action everything that one has learned over the 3 months and use them creatively.</li>
            <li>Auditions for television serials, movies, and ads. Information on various auditions, both in house and external are informed to all students after passing out.</li>
            <li>Understanding the value of team-work and the importance of every person in a film crew.</li>
          </ul>

          {/* <h2 className="text-2xl font-bold mb-2">Dates</h2>
          <p className="mb-4">Jan 17, 2024 to Apr 17, 2024</p>
          
          <h2 className="text-2xl font-bold mb-2">Duration</h2>
          <p className="mb-4">3 Months</p>
          
          <h2 className="text-2xl font-bold mb-2">Location</h2>
          <p className="mb-4">Tent Cinema Film School, Banashankari Stage-II, Bengaluru</p> */}
          
          <h2 className="text-2xl font-bold mb-2">Why should anyone attend this</h2>
          <p className="mb-4">
            This course is fun, engaging, and most importantly, delivered by industry experts who share their knowledge, stories, tips, and much more. Students can learn the art of acting in a practical way.
          </p>
        </div>
        
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enquire now</h2>
            <form>
              <div className="mb-4">
                <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Phone" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" rows="4" className="w-full p-2 border rounded"></textarea>
              </div>
              <div className="mb-4">
                <div className="bg-gray-200 p-2 text-sm text-gray-700 rounded">
                  protected by reCAPTCHA
                  <br />
                  Privacy - Terms
                </div>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                Send
              </button>
            </form>
          </div>
          
          <div className="mt-8  text-white p-6 rounded-lg">
            {/* <h2 className="text-3xl font-bold mb-2">OWN THE</h2>
            <h2 className="text-3xl font-bold mb-2">STAGE.</h2>
            <h2 className="text-3xl font-bold">ACT NOW!</h2> */}
            <img src={banner}/>
          </div>
        </div>
      </div>
    </div>
  );
}
