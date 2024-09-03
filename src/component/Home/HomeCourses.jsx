import React from 'react'
import HomeCoursesBody from './HomeCoursesBody'

const HomeCourses = () => {
  return (
    <>
    <div className="py-4">
      {/* Container with responsive padding */}
      <div className="flex items-center justify-center px-4 md:px-12 lg:px-24 xl:px-60 mb-4">
        {/* Left Line */}
        <div className="flex-grow border-t border-red-500"></div>
        {/* Title */}
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-center mx-4 text-red-500 uppercase">
          Our Courses
        </h1>
        {/* Right Line */}
        <div className="flex-grow border-t border-red-500"></div>
      </div>
    </div>
    <HomeCoursesBody/>    
    </>
  )
}

export default HomeCourses
