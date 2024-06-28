// import React from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import Logo from './images/Logo';
import DarkMode from './DarkMode';
import { OurServices } from '../pages';

const Header = () => {
  return (
    <div className="flex flex-row sm:justify-start md:justify-center items-center w-full fixed z-50 bgColor-mainGreen header-container">
      <div>
        <Link className="nav-Link sm:block hidden" to="/">
          <Logo></Logo>
        </Link>
      </div>

    <div>
    <FontAwesomeIcon className='sm:block md:hidden text-black' icon={faBars}/>
    </div>

      <Link className="nav-Link sm:block hidden" to="/">
        home
      </Link>
      <Link className="nav-Link sm:block hidden" to="/about">
        about
      </Link>
      <Link className="nav-Link sm:block hidden" to="/courses">
        courses
      </Link>
      
    {/* <OurServices/> */}

{/* our services dropdown
on hover show the list
- find a tutor
- become a tutor */}

      <Link className="nav-Link sm:block hidden" to="/find-a-tutor">
        find a tutor
      </Link>
      <Link className="nav-Link sm:block hidden" to="/join-as-tutor">
        join as tutor
      </Link>
      <Link className='nav-Link sm:block hidden' to ="/BlogPost">
      BlogPost
      </Link>

{/* login dropdown
- onclick - open login page
- on hover - open drop down list with register link */}

      <Link className="nav-Link sm:block hidden" to="/signup">
        register
      </Link>
      <Link className="nav-Link sm:block hidden" to="/signin">
        sign in
      </Link>

     <DarkMode/>

    </div>
  );
};

export default Header;
