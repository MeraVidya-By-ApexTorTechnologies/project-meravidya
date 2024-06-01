// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const FooterSocial = () => {
  return (
    // <div className="footer-item-2 footer-social">
    <div className="md:col-start-2 sm;row-start-2 flex flex-col justify-start items-start text-xs gap-1">
     <p className="font-bold capitalize text-lg color-mainGreen">social</p>
      <div>
        <FontAwesomeIcon />
        <a className='footer-social-links' href="">facebook</a>
      </div>
      <div>
        <FontAwesomeIcon />
        <a className='footer-social-links' href="">instagram</a>
      </div>
      <div>
        <FontAwesomeIcon />
        <a className='footer-social-links' href="">twitter</a>
      </div>
      <div>
        <FontAwesomeIcon />
        <a className='footer-social-links' href="">linkedin</a>
      </div>
    </div>
  );
};

export default FooterSocial;
