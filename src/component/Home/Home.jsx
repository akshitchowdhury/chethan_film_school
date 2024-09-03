import React from 'react'
import HomeHero from './HomeHero'
import AchievementCounter from './AchievemntCounter/AchievementCounter'

const Home = () => {
  return (
    <div>
        <HomeHero/>
        <div className='p-8'>
         <AchievementCounter/>     
         </div>
    </div>
  )
}

export default Home
