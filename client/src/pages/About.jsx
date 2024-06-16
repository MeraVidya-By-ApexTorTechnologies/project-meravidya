// import React from 'react'
// import '../styles/about.css'
import {Team, Mission, Goals, JoinUs, OurStory} from './about'

const About = () => {
  return (
    <div className="p-8 md:px-16">
      <Mission/>
      <Goals/>
      <OurStory/>
      <JoinUs/>
    <Team/>
    {/* <SwiperTest/> */}
  </div>
  )
}

export default About