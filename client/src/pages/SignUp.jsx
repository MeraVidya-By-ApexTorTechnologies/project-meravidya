// SignUp.jsx
import  { useState } from 'react';
import '../styles/signUp.css'; // Import the CSS file

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically perform signup logic, e.g., sending a request to your backend
    // For demonstration purposes, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // After successful signup, set signedUp to true
    setSignedUp(true);
  };

  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      {signedUp ? (
        <p>You have successfully signed up!</p>
      ) : (
        <form onSubmit={handleSubmit} className="signUp-form">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
