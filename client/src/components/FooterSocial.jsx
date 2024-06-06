// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterSocial = () => {
  return (
    // <div className="footer-item-2 footer-social">
    <div className="md:col-start-2 sm;row-start-2 flex flex-col justify-start items-start text-xs gap-1">
     <p className="font-bold capitalize text-lg color-mainGreen">social</p>
      <div>
        <FontAwesomeIcon icon={faFacebookSquare} className='pr-2'/>
        <a className='footer-social-links' href="">facebook</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faInstagram} className='pr-2'/>
        <a className='footer-social-links' href="">instagram</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faTwitter} className='pr-2'/>
        <a className='footer-social-links' href="">twitter</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faLinkedinIn} className='pr-2'/>
        <a className='footer-social-links' href="">linkedin</a>
      </div>
    </div>
  );
};

export default FooterSocial;
