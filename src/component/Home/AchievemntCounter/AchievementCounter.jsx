import React, { useEffect, useState } from 'react';

const AchievementCounter = () => {
  const [faculty, setFaculty] = useState(0);
  const [shortFilms, setShortFilms] = useState(0);
  const [theaterProductions, setTheaterProductions] = useState(0);
  const [campusAuditions, setCampusAuditions] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaculty((prev) => (prev < 75 ? prev + 1 : 75));
      setShortFilms((prev) => (prev < 200 ? prev + 2 : 200));
      setTheaterProductions((prev) => (prev < 45 ? prev + 1 : 45));
      setCampusAuditions((prev) => (prev < 50 ? prev + 1 : 50));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg py-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="text-center text-white border-r border-gray-500 last:border-none">
            <p className="text-5xl font-bold">{faculty}+</p>
            <p className="text-lg mt-2">Faculty</p>
          </div>
          <div className="text-center text-white border-r border-gray-500 last:border-none">
            <p className="text-5xl font-bold">{shortFilms}+</p>
            <p className="text-lg mt-2">Short Films</p>
          </div>
          <div className="text-center text-white border-r border-gray-500 last:border-none">
            <p className="text-5xl font-bold">{theaterProductions}+</p>
            <p className="text-lg mt-2">Theater Productions</p>
          </div>
          <div className="text-center text-white">
            <p className="text-5xl font-bold">{campusAuditions}+</p>
            <p className="text-lg mt-2">Campus Auditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCounter;
