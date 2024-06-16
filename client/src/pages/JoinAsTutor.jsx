// import React from 'react'
import '../styles/joinAsTutor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons';

const JoinAsTutor = () => {
  return (
    <div className="py-4 px-8 flex flex-col justify-center items-center w-screen min-h-screen">
      <div className="w-screen md:w-[70%] flex flex-col justify-center items-center">
    <p className="md:text-2xl mb-8 text-center text-gray-300">
      Are you passionate about teaching? Join our platform and share your knowledge with eager learners.
    </p>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl color-mainGreen font-bold underline capitalize mb-4">fill your details</h3>
      <form className="details-form px-4 py-8 flex flex-col md:grid md:grid-cols-2 md:grid-rows-8 gap-2 ">
        {/* Add form fields for tutor application */}
       <input type="text" placeholder='first name*' className='details-form-fields' required/>
       <input type="text" placeholder='last name*' className='details-form-fields' required/>
          <input type="email" id="email" name="email" className='details-form-fields' placeholder='email*' required />
          <input type="tel" placeholder='mobile*' className="details-form-fields" />
          <input type="text" placeholder='qualification*' className="details-form-fields" />
          <input type="text" placeholder='linkedin URL/ CV URL*' className="details-form-fields" />
          <textarea name="" id="" placeholder='why should we hire you? (max 300 characters)' className="details-form-fields row-span-3 col-span-2" rows='5'  maxLength={300}></textarea>
          <p className='text-xs flex flex-col justify-center text-end'>enter available date to join</p>
          <input type="date" placeholder='available from' className="details-form-fields" />
        {/* Add more form fields as needed */}
        <button type="submit" className="button col-span-2">apply</button>
       
       
      </form>
    </div>
      </div>
  </div>
  )
}

export default JoinAsTutor