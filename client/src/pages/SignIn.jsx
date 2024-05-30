import React, { useState } from 'react';
import '../styles/signIn.css'; // Import the CSS file

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically perform authentication logic, e.g., sending a request to your backend
    // For demonstration purposes, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    // After successful authentication, set loggedIn to true
    setLoggedIn(true);
  };

  return (
    <div className="my-class-name">
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit} className="signIn-form"> {/* Add className for styling */}
          <label>
            Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          
          <br />
          <label>
            Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          
          <br />
          <button type="submit">Sign In</button>
        </form>
      )}
    </div>
  );
};

export default SignInForm;
