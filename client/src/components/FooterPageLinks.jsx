// import React from 'react'
import { Link } from "react-router-dom";


const FooterPageLinks = () => {
  return (
    <div className='footer-item-1 footer-page-links'>
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
  )
}

export default FooterPageLinks