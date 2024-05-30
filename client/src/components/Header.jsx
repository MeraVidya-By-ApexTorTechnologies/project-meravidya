// import React from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import Logo from './Logo'

const Header = () => {
  return (
    <div className="header-container">
      <div className="home-icon">
        <Link className="nav-Link" to="/">
          <Logo></Logo>
        </Link>
      </div>

      <Link className="nav-Link" to="/">
        home
      </Link>
      <Link className="nav-Link" to="/about">
        about
      </Link>
      <Link className="nav-Link" to="/courses">
        courses
      </Link>
      <Link className="nav-Link" to="/find-a-tutor">
        find a tutor
      </Link>
      <Link className="nav-Link" to="/join-as-tutor">
        join as tutor
      </Link>
      <Link className="nav-Link" to="/signup">
        signup
      </Link>
      <Link className="nav-Link" to="/signin">
        sign in
      </Link>
    </div>
  );
};

export default Header;
