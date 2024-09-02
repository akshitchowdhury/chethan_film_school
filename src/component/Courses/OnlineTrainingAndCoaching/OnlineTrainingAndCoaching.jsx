import React from 'react';
import banner from "../../../assets/filmMakingBanner.webp"; // Replace with appropriate image
import OnlineTrainingAndCoachingHero from './OnlineTrainingAndCoachingHero'; // Hero component for online training and coaching
import OnlineTrainingAndCoachingText from './OnlineTrainingAndCoachingText'; // Text component for online training and coaching

export default function OnlineTrainingAndCoaching() {
    return (
        <>
            <OnlineTrainingAndCoachingHero />
            <OnlineTrainingAndCoachingText />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start text-justify lg:space-x-8">
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl font-bold mb-6">Overview of Online Training and Coaching</h1>

                        <p className="mb-4">
                            Our <span className="font-semibold text-xl text-red-600">Online Training and Coaching</span> provides flexible learning options with virtual classrooms and personalized coaching sessions. Perfect for those who prefer to learn from the comfort of their home.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">Online Training and Coaching</h2>
                        <ul className="list-disc list-inside mb-6 leading-relaxed">
                            <li><strong>Overview:</strong> Flexible learning options with online courses and personalized coaching sessions.</li>
                            <li><strong>Subjects Covered:</strong> Virtual classrooms, interactive sessions, and mentorship.</li>
                            <li><strong>Special Features:</strong> Tailored training to accommodate individual learning styles.</li>
                            <li><strong>Outcome:</strong> Acquire filmmaking skills remotely with expert guidance and support.</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6">What to Expect from Online Training and Coaching</h2>
                        <ul className="list-disc list-inside mb-6">
                            <li>Access to a range of online courses covering various aspects of filmmaking.</li>
                            <li>Interactive sessions with real-time feedback and guidance from instructors.</li>
                            <li>Personalized coaching to address specific learning needs and goals.</li>
                            <li>Flexible scheduling to fit training around your personal commitments.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-2">Why Choose Online Training and Coaching?</h2>
                        <p className="mb-4">
                            Our online training and coaching programs are designed to offer flexibility and convenience while ensuring high-quality education. Whether you're looking to start a new career or enhance your existing skills, our expert instructors provide personalized support to help you achieve your goals.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-justify leading-relaxed">
                            <li><strong>Flexible Learning:</strong> Study from anywhere at your own pace with access to virtual classrooms and resources.</li>
                            <li><strong>Personalized Coaching:</strong> Receive tailored guidance and feedback from experienced industry professionals.</li>
                            <li><strong>Interactive Sessions:</strong> Engage in real-time discussions and hands-on activities to enhance your learning experience.</li>
                            <li><strong>Convenience:</strong> Balance your training with other commitments through flexible scheduling options.</li>
                            <li><strong>Expert Support:</strong> Get valuable insights and support from seasoned professionals in the filmmaking industry.</li>
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
                            <img src={banner} alt="Online Training and Coaching Banner" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
