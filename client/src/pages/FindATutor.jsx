// import React from 'react'
import '../styles/findATutor.css'


const FindATutor = () => {
  return (
    <div className="find-tutor-container">
    <h2 className="find-tutor-title">Find A Tutor</h2>
    <div className="tutor">
      <h3 className="tutor-name">Tutor 1</h3>
      <p className="tutor-info">
        Description of Tutor 1
      </p>
    </div>
    <div className="tutor">
      <h3 className="tutor-name">Tutor 2</h3>
      <p className="tutor-info">
        Description of Tutor 2
      </p>
    </div>
    {/* Add more tutors as needed */}
  </div>
  )
}

export default FindATutor