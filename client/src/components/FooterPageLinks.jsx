// import React from 'react'
import { Link } from 'react-router-dom';

const FooterPageLinks = () => {
  return (
    // <div className='footer-item-1 footer-page-links'>
    <div className="md:col-start-1 sm:row-start-1 flex flex-col justify-start items-start text-xs gap-1">
      <p className="font-bold capitalize text-lg color-mainGreen">MeraVidya</p>
      <Link className="nav-footer-Link" to="/">
        home
      </Link>
      <Link className="nav-footer-Link" to="/about">
        about
      </Link>
      <Link className="nav-footer-Link" to="/courses">
        courses
      </Link>
      <Link className="nav-footer-Link" to="/find-a-tutor">
        find a tutor
      </Link>
      <Link className="nav-footer-Link" to="/join-as-tutor">
        join as tutor
      </Link>
      <Link className="nav-footer-Link" to="/signup">
        signup
      </Link>
      <Link className="nav-footer-Link" to="/signin">
        sign in
      </Link>
    </div>
  );
};

export default FooterPageLinks;
