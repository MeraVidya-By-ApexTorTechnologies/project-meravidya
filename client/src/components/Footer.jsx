// import React from 'react'
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import FooterPageLinks from './FooterPageLinks';

const Footer = () => {
  return (
    <div className="footer-container fixed-footer bg-black txt-white center-txt">
      <div>
        all copyrights reserved 2024 <nbsp />
        <span>
          <FontAwesomeIcon icon={faCopyright} />
        </span>
      </div>
      <div className="footerDetails">
        <FooterPageLinks />
        <FooterSocial />
        <FooterContact />
      </div>
      <div className='goTop-icon'>
        <a href='#goToTop'>
      <FontAwesomeIcon icon={faAngleUp} style={{ color: 'white' }}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
