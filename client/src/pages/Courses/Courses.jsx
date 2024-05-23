import React from 'react';
import './Courses.css'; // Create this file for specific Courses page styles

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="course">
        <h3 className="course-title">Course 1</h3>
        <p className="course-description">
          Description of Course 1
        </p>
      </div>
      <div className="course">
        <h3 className="course-title">Course 2</h3>
        <p className="course-description">
          Description of Course 2
        </p>
      </div>
      {/* Add more courses as needed */}
    </div>
  );
};

export default Courses;
