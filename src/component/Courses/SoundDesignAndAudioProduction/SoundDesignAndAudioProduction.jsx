import React from 'react';
import soundDesignBanner from "../../../assets/filmMakingBanner.webp"; // Replace with the appropriate path to your image
import SoundDesignHero from './SoundDesignHero'; // Create or replace with the relevant hero component
import SoundDesignText from './SoundDesignText'; // Create or replace with the relevant text component

export default function SoundDesignAndAudioProduction() {
  return (
    <>
      <SoundDesignHero/>
      <SoundDesignText/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:items-start text-justify lg:space-x-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Overview of Sound Design and Audio Production</h1>

            <p className="mb-4">
              This immersive course on <span className="font-semibold text-xl text-red-600">Sound Design and Audio Production</span> is designed to explore the art of sound recording, design, and mixing techniques to create immersive film experiences. Perfect for those looking to deepen their understanding of audio's role in enhancing narratives.
            </p>

            <p className="mb-6">
              The course offers hands-on training in various aspects of sound design, including microphone techniques, soundscapes, dialogue editing, and Foley art, ensuring a practical approach to learning.
            </p>

            <h2 className="text-3xl font-bold mb-6">Why Attend This Course?</h2>
<p className="mb-4">
  This course on <span className="font-semibold text-xl text-red-600">Sound Design and Audio Production</span> offers a unique opportunity to dive deep into the world of audio and sound for film. Here’s why this course stands out:
</p>
<ul className="list-disc list-inside mb-6 leading-relaxed text-justify">
  <li>
    <strong>Interactive Learning:</strong> Engage in immersive, studio-based practical sessions that replicate real-world audio production scenarios. You'll get hands-on experience with state-of-the-art equipment and software, making learning both practical and enjoyable.
  </li>
  <li>
    <strong>Expert Instruction:</strong> Benefit from the guidance of seasoned sound designers and audio engineers. These industry professionals share their extensive knowledge and insights, providing you with invaluable tips and techniques that are essential for mastering sound design and audio production.
  </li>
  <li>
    <strong>Practical Experience:</strong> Gain comprehensive experience in key areas such as microphone techniques, soundscapes, dialogue editing, and Foley art. Through practical exercises and real-world projects, you'll develop a well-rounded skill set that is crucial for creating compelling audio experiences.
  </li>
  <li>
    <strong>Career Enhancement:</strong> Build a robust portfolio showcasing your ability to craft immersive soundscapes and enhance film narratives. This portfolio will be a significant asset as you pursue various roles in the film and audio industry, helping you stand out to potential employers and clients.
  </li>
  <li>
    <strong>Comprehensive Curriculum:</strong> Receive a thorough education that covers everything from fundamental sound design principles to advanced techniques. The curriculum is designed to prepare you for a range of career opportunities in the audio and film industries, equipping you with the knowledge and skills needed to excel.
  </li>
  <li>
    <strong>Networking Opportunities:</strong> Connect with fellow students, industry experts, and potential employers through workshops, events, and collaborative projects. Building a strong network can open doors to future career opportunities and collaborations.
  </li>
  <li>
    <strong>Personalized Feedback:</strong> Receive tailored feedback on your projects and assignments from experienced instructors. This personalized guidance helps you refine your skills and improve your work, ensuring you meet industry standards and expectations.
  </li>
</ul>

            <h2 className="text-2xl font-bold mb-6">Why Attend This Course?</h2>
            <ul className="list-disc list-inside mb-6 leading-relaxed text-justify">
              <li><strong>Interactive Learning</strong>: Participate in studio-based practical sessions that simulate real-world audio production scenarios.</li>
              <li><strong>Expert Instruction</strong>: Learn from seasoned sound designers and audio engineers who provide valuable insights and hands-on guidance.</li>
              <li><strong>Practical Experience</strong>: Gain experience with microphone techniques, soundscapes, dialogue editing, and Foley art to build a comprehensive skill set.</li>
              <li><strong>Career Enhancement</strong>: Build a portfolio showcasing your ability to create immersive soundscapes, which is crucial for various roles in the film and audio industry.</li>
              <li><strong>Comprehensive Curriculum</strong>: Receive a thorough education in sound design, from basic principles to advanced techniques, preparing you for diverse career opportunities.</li>
            </ul>
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

            <div className="mt-8 text-white p-6 rounded-lg">
              <img src={soundDesignBanner} alt="Sound Design and Audio Production Banner" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
