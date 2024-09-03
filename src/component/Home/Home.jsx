import React from 'react'
import HomeHero from './HomeHero'
import AchievementCounter from './AchievemntCounter/AchievementCounter'
import AboutBody from '../About/AboutBody/AboutBody'
import HomeAbout from './HomeAbout'

const Home = () => {
  return (
    <div>
        <HomeHero/>
        <HomeAbout/>
        <div className='p-8'>
         <AchievementCounter/>     
         </div>
    </div>
  )
}

export default Home
