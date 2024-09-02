import React from 'react';
import chethan from "../../assets/homeBg2.jpg";
import michael from "../../assets/Designer.jpeg";
import emily from "../../assets/homeBg3.jpg";
import FacultyHero from './FacultyHero';
import FacultyText from './FacultyText';

const facultyMembers = [
  {
    name: "Chethan Jodidhar",
    role: "Seasoned filmmaker and course director",
    description: "Renowned for [mention notable works or expertise].",
    image: chethan
  },
  {
    name: "Emily Chan",
    role: "Award-winning cinematographer",
    description: "Celebrated for [mention specific cinematography techniques or achievements].",
    image: emily
  },
  {
    name: "Michael Patel",
    role: "Renowned film editor and VFX specialist",
    description: "Credited for [mention notable projects or innovations].",
    image: michael
  }
];

export default function Faculty() {
  return (
    <>
    <FacultyHero/>
    <FacultyText/>
    <div className="container mx-auto p-4  text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Renowned Faculty and Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="aspect-w-3 aspect-h-4 h-[300px] md:h-[500px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-red-500 font-semibold mb-2">{member.role}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}