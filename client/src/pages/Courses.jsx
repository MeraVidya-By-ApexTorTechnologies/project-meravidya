// import React from 'react'
import { FlowImg1 } from '../assets/images/homeFlows'
import '../styles/courses.css'


const Courses = () => {
  return (
    <div className="py-4 px-8 flex flex-col ">
    <h2 className="courses-title">Our Courses</h2>
    <div  className='py-4 px-8 flex gap-4'>
    <div className="py-4 px-8 flex gap-4 flex-col border border-mainGreen border-8 rounded-xl">
      <h3 className="mb-2 text-2xl">Course 1</h3>
      <img src={FlowImg1} alt="" />
      <p className="course-description">
        Description of Course 1
      </p>
      <button type="start now" className="button">Start now</button>
    </div>
    <div className="py-4 px-8 flex gap-4 flex-col border border-mainGreen border-8 rounded-xl">
      <h3 className="mb-2 text-2xl">Course 1</h3>
      <img src={FlowImg1} alt="" />
      <p className="course-description">
        Description of Course 1
      </p>
      <button type="start now" className="button">Start now</button>
    </div>
    <div className="py-4 px-8 flex gap-4 flex-col border border-mainGreen border-8 rounded-xl">
      <h3 className="mb-2 text-2xl">Course 1</h3>
      <img src={FlowImg1} alt="" />
      <p className="course-description">
        Description of Course 1
        </p>
        <button type="start now" className="button">Start now</button>
      </div>
      <div className="py-4 px-8 flex gap-4 flex-col border border-mainGreen border-8 rounded-xl">
        <h3 className="mb-2 text-2xl">Course 1</h3>
        <img src={FlowImg1} alt="" />
        <p className="course-description">
          Description of Course 1
        </p>
        <button type="start now" className="button">Start now</button>
      </div>
     
      </div>
      </div>
     );
     };

export default Courses