import React from 'react';
import banner from "../../../assets/filmMakingBanner.webp"; // Replace with appropriate image
import WorkshopsHero from './WorkshopsHero';
import WorkshopsText from './WorkshopsText';

export default function WorkshopsAndCrashCourses() {
    return (
        <>
            <WorkshopsHero />
            <WorkshopsText />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex lg:items-start text-justify lg:space-x-8">
                    <div className="lg:w-2/3">
                        <h1 className="text-3xl font-bold mb-6">Overview of Workshops and Crash Courses</h1>

                        <p className="mb-4">
                            Our <span className="font-semibold text-xl text-red-600">Workshops and Crash Courses</span> offer short-term, intensive programs focused on specific aspects of filmmaking. These programs are designed for rapid skill acquisition through targeted training modules.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">Workshops and Crash Courses</h2>
                        <ul className="list-disc list-inside mb-6 leading-relaxed">
                            <li><strong>Overview:</strong> Short-term intensive programs focusing on specific filmmaking aspects.</li>
                            <li><strong>Subjects Covered:</strong> Screenwriting, cinematography techniques, directing actors, and more.</li>
                            <li><strong>Special Features:</strong> Rapid skill acquisition through focused training modules.</li>
                            <li><strong>Outcome:</strong> Gain foundational knowledge and practical experience in targeted areas.</li>
                        </ul>

                        <h2 className="text-3xl font-bold mb-6">What to Expect from these Workshops</h2>
                        <ul className="list-disc list-inside mb-6">
                            <li>Intensive sessions that cover essential aspects of filmmaking in a short period.</li>
                            <li>Hands-on experience with practical exercises and real-world scenarios.</li>
                            <li>Opportunities to work on specific projects that highlight the skills learned.</li>
                            <li>Guidance from experienced instructors who specialize in the relevant filmmaking areas.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-2">Why Attend These Workshops?</h2>
                        <p className="mb-4">
                            Our workshops and crash courses are designed to be highly effective and engaging, providing participants with practical skills and insights in a condensed format. Taught by industry professionals, these programs offer an excellent opportunity to quickly acquire new skills and enhance your filmmaking abilities.
                        </p>
                        <ul className="list-disc list-inside mb-6 text-justify leading-relaxed">
                            <li><strong>Focused Training:</strong> Benefit from short-term, intensive programs that target specific filmmaking skills.</li>
                            <li><strong>Expert Instructors:</strong> Learn from seasoned professionals who bring real-world experience to the training sessions.</li>
                            <li><strong>Practical Application:</strong> Engage in hands-on exercises and projects to apply the skills learned in real-world scenarios.</li>
                            <li><strong>Rapid Skill Acquisition:</strong> Gain foundational knowledge and practical experience in a short amount of time.</li>
                            <li><strong>Career Advancement:</strong> Enhance your filmmaking skills and add to your portfolio, making you more competitive in the industry.</li>
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
                            <img src={banner} alt="Workshops and Crash Courses Banner" className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
