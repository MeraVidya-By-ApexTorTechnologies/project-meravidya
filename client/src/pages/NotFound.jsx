// import React from 'react'
import '../styles/errorPage.css';
import { ErrorDog } from '../components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="errorPage-container">
      <Link className="nav-Link" to="/">
        <ErrorDog />
      </Link>
      <div className="errorPage-number-header">404</div>
      <div className="errorPage-description">page not found.</div>
    </div>
  );
};

export default NotFound;
