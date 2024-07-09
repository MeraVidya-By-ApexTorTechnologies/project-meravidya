import React, { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Logo from './images/Logo';
import DarkMode from './DarkMode';

const Header = () => {
  const [dropdown, setDropdown] = useState({
    about: false,
    services: false,
    tutors: false,
  });

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="flex flex-row justify-center items-center w-full fixed z-50 bgColor-mainGreen header-container">
      <div>
        <Link className="nav-Link sm:block hidden" to="/">
          <Logo />
        </Link>
      </div>

      <div>
        <FontAwesomeIcon className='sm:block md:hidden text-black' icon={faBars} />
      </div>

      <Link className="nav-Link sm:block hidden" to="/">
        Home
      </Link>

      {/* About Dropdown */}
      <Link className="nav-Link sm:block hidden" to="/about">
      <div className="relative">
        <button className="nav-Link sm:block hidden" onClick={() => toggleDropdown('about')}>
          About
          <FontAwesomeIcon icon={dropdown.about ? faChevronUp : faChevronDown} className="ml-2" />
        </button>
        {dropdown.about && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Link to="/contact" className="block px-4 py-2 text-center text-sm text-gray-700">Contact</Link>
              <Link to="/blogslist" className="block px-4 py-2 text-center text-sm text-gray-700">Blogs</Link>
            </div>
          </div>
        )}
      </div>
      </Link>

      {/* Services Dropdown */}
      <Link className="nav-Link sm:block hidden" to="/services">
      <div className="relative">
        <button className="nav-Link sm:block hidden" onClick={() => toggleDropdown('services')}>
          Our Services
          <FontAwesomeIcon icon={dropdown.services ? faChevronUp : faChevronDown} className="ml-2" />
        </button>
        {dropdown.services && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Link to="/find-a-tutor" className="block px-4 py-2 text-center text-sm text-gray-700">Find a Tutor</Link>
              <Link to="/join-as-tutor" className="block px-4 py-2 text-center text-sm text-gray-700">Become a Tutor</Link>
            </div>
          </div>
        )}
      </div>
      </Link>

      {/* Tutors Dropdown */}
      <Link className="nav-Link sm:block hidden" to="/tutors">
      <div className="relative">
        <button className="nav-Link sm:block hidden" onClick={() => toggleDropdown('tutors')}>
          Our Tutors
          <FontAwesomeIcon icon={dropdown.tutors ? faChevronUp : faChevronDown} className="ml-2" />
        </button>
        {dropdown.tutors && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Link to="/learning-tools" className="block px-4 py-2 text-center text-sm text-gray-700">Learning Tools</Link>
              <Link to="/induction-call" className="block px-4 py-2 text-center text-sm text-gray-700">Induction Call</Link>
            </div>
          </div>
        )}
      </div>
      </Link>

      <Link className="nav-Link sm:block hidden" to="/signup">
        Register
      </Link>
      <Link className="nav-Link sm:block hidden" to="/signin">
        Sign In
      </Link>

      <DarkMode />
    </div>
  );
};

export default Header;
