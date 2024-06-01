// import React from 'react'
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import FooterContact from './FooterContact';
import FooterSocial from './FooterSocial';
import FooterPageLinks from './FooterPageLinks';

const Footer = () => {
  return (
    <div className="flex flex-col  gap-5 p-10 items-center md:max-h-[40vh] bg-black text-white center-txt left-0 bottom-0 w-screen capitalize">
      {/* className="footer-container footer" */}
      <div className='hidden sm:block' >
        all copyrights reserved 2024 <nbsp />
        <span>
          <FontAwesomeIcon icon={faCopyright} />
        </span>
      </div>
      {/* <div className="footerDetails"> */}
      <div className="grid gap-8 md:grid-cols-3 md:grid-rows-1 sm:grid-rows-3 sm:grid-cols-1">
        <FooterPageLinks />
        <FooterSocial />
        <FooterContact />
      </div>
      <div className='goTop-icon p-5'>
        <a href='#goToTop'>
      <FontAwesomeIcon icon={faAngleUp} className='text-black'/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
