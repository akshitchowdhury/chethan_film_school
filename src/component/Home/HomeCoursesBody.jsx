import React from 'react';
import filmmaking from "../../assets/homeBg2.jpg"; // Replace with appropriate image paths
import acting from "../../assets/Designer.jpeg"; // Replace with appropriate image paths
import editing from "../../assets/homeBg3.jpg"; // Replace with appropriate image paths

const courses = [
  {
    title: "Film Making Course",
    description: "Learn the art of storytelling, direction, and production in our comprehensive Film Making Course.",
    image: filmmaking
  },
  {
    title: "Intensive Acting Course",
    description: "Master the craft of acting with our immersive, hands-on acting course led by industry experts.",
    image: acting
  },
  {
    title: "Editing and Visual Effects",
    description: "Explore the world of post-production with our in-depth course on Editing and Visual Effects.",
    image: editing
  },
  {
    title: "Sound Design and Audio Production",
    description: "Gain expertise in sound engineering with our course on Sound Design and Audio Production.",
    image: "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4564.png"
  },
  {
    title: "Workshops and Crash Courses",
    description: "Attend specialized workshops and crash courses to quickly enhance your skills in various film disciplines.",
    image: "https://tentcinema.com/wp-content/uploads/2024/02/9-1-768x432.jpg.webp"
  },
  {
    title: "Online Training and Coaching",
    description: "Access our flexible online training programs and coaching sessions from anywhere in the world.",
    image: "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4576.jpg"
  }
];

export default function HomeCoursesBody() {
  return (
    <div className="container mx-auto p-4 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-w-3 aspect-h-4 h-[300px] md:h-[500px] overflow-hidden relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Red tint overlay */}
              <div className="absolute inset-0 bg-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>

              {/* Course title - visible by default, hidden on hover */}
              <div className="absolute bottom-4 left-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-xl font-bold">{course.title}</h3>
              </div>

              {/* Course description - hidden by default, appears on hover */}
              <div className="absolute inset-0  flex  items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-medium text-justify">{course.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
