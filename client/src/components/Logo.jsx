// import React from 'react'
import LogoImage from '../assets/images/logo.gif'
import '../styles/header.css'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={LogoImage} alt="loading logo image" style={{height:'15vh'}}/>
    </div>
  )
}

export default Logo