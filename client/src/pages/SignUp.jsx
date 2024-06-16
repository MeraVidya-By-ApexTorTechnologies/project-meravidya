import React from 'react'
import '../styles/joinAsTutor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-screen px-9 py-3'>
          <p className="md:text-2xl mb-8 text-center text-gray-300 font-bold">
      SignUp
    </p>
      <form className="details-form px-4 py-8 flex flex-col gap-4 justify-center items-center ">
        {/* Add form fields for tutor application */}
       <input type="text" placeholder='enter name*' className='details-form-fields' required />
          <input type="email" id="email" name="email" className='details-form-fields' placeholder='enter your email*' required />
          <input type="tel" placeholder='mobile*' className="details-form-fields" required/>
          <input type="password" placeholder='password*' className="details-form-fields" required/>
        {/* Add more form fields as needed */}
        <button type="submit" className="button">Submit</button>
        <p className='capitalize text-xs'>or continue with</p>
        <div className='flex justify-center w-[100%]  py-2 gap-4'>
          <button className='button rounded-full'>
          <FontAwesomeIcon icon={faGoogle}/>
            </button>
            <button className='button rounded-full'>
          <FontAwesomeIcon icon={faLinkedinIn}/>
            </button>
        </div>
      </form>
      <p className="mt-4 text-center text-gray-300">
    Already existing user?_
    <Link className='font-bold text-blue-400' to="/signin">
        SignIn
      </Link>
    </p>
    </div>
  )
}

export default SignUp
