import React from 'react'
import AboutStory from './AboutStory'
import AboutCount from './AboutCount'
import AboutMember from './AboutMember'
import Services from '../Services/Services'

const About = () => {
  return (
    <div className='sectionContainer'>
        <AboutStory/>
        <AboutCount/>
        <AboutMember/>
        <Services/>
    </div>
  )
}

export default About