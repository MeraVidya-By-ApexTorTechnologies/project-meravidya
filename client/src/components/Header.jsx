// import React from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom';
import Logo from './Logo'

const Header = () => {
  return (
    <div className="header-container">
      <div className="home-icon">
        <Link className="nav-Link" to="/">
          <Logo />
        </Link>
      </div>

      <Link className="nav-Link" to="/">
        home
      </Link>
      <Link className="nav-Link" to="/about">
        about
      </Link>
      {/* <Link className="nav-Link" to="/courses">
        courses
      </Link> */}

<Link className="nav-Link">
  our services
</Link>

      {/* <Link className="nav-Link" to="/find-a-tutor">
        find a tutor
      </Link>
      <Link className="nav-Link" to="/join-as-tutor">
        join as tutor
      </Link> */}

<Link className="nav-Link">
  our tutors
</Link>

<Link className="nav-Link" to="/signup">
        register
    </Link>
      
      <Link className="nav-Link" to="/signin">
        Login
      </Link> 
    </div>
  );
};

export default Header;
