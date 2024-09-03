import React from 'react'
import HomeHero from './HomeHero'
import AchievementCounter from './AchievemntCounter/AchievementCounter'
import AboutBody from '../About/AboutBody/AboutBody'
import HomeAbout from './HomeAbout'
import Contact from '../Contact/Contact'
import ContactBody from '../Contact/ContactBody'

const Home = () => {
  return (
    <div>
        <HomeHero/>
        <HomeAbout/>
        <div className='p-8'>
         <AchievementCounter/>     
         </div>
         <ContactBody/>
    </div>
  )
}

export default Home
