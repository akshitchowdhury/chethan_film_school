import React from 'react';
import editingVfxBanner from "../../../assets/filmMakingBanner.webp"; // Replace with the appropriate path to your image
import EditingAndVfxHero from './EditingAndVfxHero';
import EditingAndVfxText from './EditingAndVfxtext';

export default function EditingAndVfx() {
  return (
    <>
      <EditingAndVfxHero/>
      <EditingAndVfxText/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:items-start text-justify lg:space-x-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Overview of Editing and Visual Effects (VFX)</h1>

            <p className="mb-4">
              This comprehensive course on <span className="font-semibold text-xl text-red-600">Editing and Visual Effects (VFX)</span> is designed to master post-production techniques with a focus on advanced editing and VFX integration. Ideal for those looking to enhance their storytelling through sophisticated visual enhancements.
            </p>

            <p className="mb-6">
              The course offers an in-depth exploration of editing software and VFX tools, providing hands-on experience with industry-standard software to ensure practical learning and application.
            </p>

            <h2 className="text-3xl font-bold mb-6">Editing and Visual Effects (VFX) Course</h2>
            <ul className="list-disc list-inside mb-6 leading-relaxed text-justify">
              <li><strong>Overview:</strong> Master post-production with a focus on editing techniques and VFX integration.</li>
              <li><strong>Subjects Covered:</strong> Non-linear editing software, color grading, CGI, and motion graphics.</li>
              <li><strong>Special Features:</strong> Hands-on training using industry-standard software.</li>
              <li><strong>Outcome:</strong> Learn to elevate storytelling through advanced editing and visual effects.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Why Attend This Course?</h2>
            <ul className="list-disc list-inside mb-6 leading-relaxed text-justify">
              <li><strong>Interactive Learning</strong> : Engage in practical sessions using cutting-edge software to apply editing and VFX techniques in real-world scenarios.</li>
              <li><strong>Expert Instruction</strong>: Learn from experienced professionals who will guide you through advanced post-production processes and industry best practices.</li>
              <li><strong>Hands-On Experience</strong>: Gain practical skills with hands-on training in color grading, CGI, and motion graphics, crucial for modern filmmaking.</li>
              <li><strong>Career Advancement</strong>: Develop a strong portfolio of edited and VFX-enhanced projects to showcase your abilities to potential employers and clients.</li>
              <li><strong>Comprehensive Curriculum</strong>: From basic editing principles to advanced VFX techniques, get a thorough education in post-production that prepares you for various roles in the industry.</li>
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
              <img src={editingVfxBanner} alt="Editing and VFX Banner" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
