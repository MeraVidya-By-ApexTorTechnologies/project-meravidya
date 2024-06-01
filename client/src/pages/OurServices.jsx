import React, { useState } from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';

const OurServices = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <div className='relative'>
    <Link className='relative nav-Link'  onClick={toggleMenu}>
    our services
    </Link>
  {
    isOpen && <ul className='relative hidden top-0 left-0 w-full bg-white rounded-md shadow-sm  transition duration-150 ease-in-out'>
<li>1</li>
<li>2</li>
<li>3</li>
    </ul>
  }

  </div>;
};

export default OurServices;
