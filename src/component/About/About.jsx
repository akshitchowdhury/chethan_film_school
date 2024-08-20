import React from 'react'
import AboutHero from './AboutHero'
import AboutText from './AboutText'
import AboutBody from './AboutBody/AboutBody'
import AboutBody2 from './AboutBody/AboutBody2'
import AboutBody3 from './AboutBody/AboutBody3'

const About = () => {
  return (
    <>
    <div>
      <AboutHero/>
      <AboutText/>
    </div>
    <AboutBody/>
    <AboutBody2/>
    <AboutBody3/>
    </>
  )
}

export default About
