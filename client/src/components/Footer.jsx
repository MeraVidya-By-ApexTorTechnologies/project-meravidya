// import React from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='fixed-footer bg-black txt-white center-txt'>all copyrights reserved 2024 <nbsp/>
    <span>
      <FontAwesomeIcon icon={faCopyright}/>
      </span></div>
  )
}

export default Footer