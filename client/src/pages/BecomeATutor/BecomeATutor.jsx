import React from 'react';
import './BecomeATutor.css'; // Create this file for specific BecomeATutor page styles

const BecomeATutor = () => {
  return (
    <div className="become-tutor-container">
      <h2 className="become-tutor-title">Become A Tutor</h2>
      <p className="become-tutor-description">
        Are you passionate about teaching? Join our platform and share your knowledge with eager learners.
      </p>
      <div className="tutor-application">
        <h3 className="application-title">Tutor Application</h3>
        <form className="application-form">
          {/* Add form fields for tutor application */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          {/* Add more form fields as needed */}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BecomeATutor;
