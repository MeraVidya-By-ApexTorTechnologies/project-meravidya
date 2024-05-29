// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const FooterSocial = () => {
  return (
    <div className="footer-item-2 footer-social">
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
