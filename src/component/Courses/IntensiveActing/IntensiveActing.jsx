import React from 'react';
import banner from "../../../assets/filmMakingBanner.webp"; // Replace with appropriate image
import IntensiveActingHero from './IntensiveActingHero'; // Hero component for acting course
import IntensiveActingText from './IntensiveActingText'; // Text component for acting course

export default function IntensiveActing() {
    return (
        <>
            <IntensiveActingHero />
            <IntensiveActingText />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start text-justify lg:space-x-8">
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl font-bold mb-6">Overview of Intensive Acting Course</h1>

                        <p className="mb-4">
                            This course at <span className="font-semibold text-xl text-red-600">Chethan Film Schools</span>, offers a deep dive into acting techniques like method acting and character development, perfect for both aspiring and seasoned actors.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">Intensive Acting Course</h2>
                        <ul className="list-disc list-inside mb-6 leading-relaxed">
                            <li><strong>Overview:</strong> Dive deep into acting techniques, including method acting and character development.</li>
                            <li><strong>Subjects Covered:</strong> Emotional range, improvisation, and practical acting workshops.</li>
                            <li><strong>Special Features:</strong> Live performance opportunities to hone acting skills.</li>
                            <li><strong>Outcome:</strong> Participants prepare for diverse roles in film and television with enhanced acting proficiency.</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6">What to Expect from this Course</h2>
                        <ul className="list-disc list-inside mb-6">
                            <li>Comprehensive preparation for various on-camera roles, eliminating stage fear and hesitation.</li>
                            <li>Opportunities to perform in street plays and short films, utilizing the skills learned during the course.</li>
                            <li>Guidance on auditioning for television, movies, and ads, with information on upcoming opportunities.</li>
                            <li>Understanding the importance of teamwork and the role of each crew member in a production.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-2">Why Attend This Course?</h2>
                        <p className="mb-4">
                            This course is designed to be not just informative but also highly engaging, making the learning process both enjoyable and effective. It is taught by seasoned industry professionals who bring years of real-world experience to the table. They share invaluable insights, practical tips, and behind-the-scenes knowledge that you won’t find in textbooks.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-justify leading-relaxed">
  <li><strong> Interactive Learning </strong> : Engage in a curriculum that goes beyond theory with live workshops, improvisation sessions, and real-world acting scenarios.</li>
  <li><strong>Expert Guidance </strong>: Learn from industry professionals with extensive experience who will mentor you through the nuances of acting, from character development to on-screen presence.</li>
  <li><strong>Networking Opportunities </strong>: Connect with peers and industry professionals, with access to networking events and auditions that can boost your acting career.</li>
  <li><strong>Practical Experience </strong>: Participate in live performances, street plays, and short films, applying what you've learned in a real-world context to build your confidence and skills.</li>
  {/* <li>Comprehensive Skill Development: Master emotional range, improvisation, and character development, preparing you for diverse roles in film and television.</li>
  <li>Supportive Learning Environment: Grow at your own pace in a creative environment that encourages individual expression and provides constructive feedback.</li>
  <li>Career Preparedness: Equip yourself with the skills, knowledge, and confidence to succeed in auditions and roles across various acting mediums, from TV shows to feature films.</li> */}
</ul>

                        
                    </div>

                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Enquire Now</h2>
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
                                        Protected by reCAPTCHA
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
                            <img src={banner} alt="Acting Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
