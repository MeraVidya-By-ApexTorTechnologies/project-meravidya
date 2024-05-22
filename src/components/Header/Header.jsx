import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div>
          
          <h1>MeraVidya</h1>
        </div>
      </div>
      <nav className="nav">
        <h>Logo</h> {/* I'm assuming this is a placeholder */}
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Courses</a></li>
          <li className="nav-item"><a href="/contact">Become A Tutor</a></li>
          <li className="nav-item"><a href="/contact">Find A Tutor</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
