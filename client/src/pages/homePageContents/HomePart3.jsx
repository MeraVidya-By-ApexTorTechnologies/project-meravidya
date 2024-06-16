import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../../styles/homepart3.css'

const HomePart3 = () => {
  const dummyArr = new Array(5);

  return (
    <div className="flex flex-col justify-center items-center w-screen gap-4 p-8 ">
      <p className="capitalize font-semibold text-2xl italic w-[100%]">testimonials</p>


      <div className="blogs-container flex gap-4 justify-around max-w-[100%]  overflow-hidden">
        {/* {dummyArr.map((number, index) => ( */}
        {/* // key={index} */}
          <div
            className="lg:w-[30%] md:w-[40%] sm:w-[100%] border-4 border-mainGreen p-4 rounded-xl"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo quisquam, sequi
              saepe tenetur optio velit ex consectetur necessitatibus modi facere possimus iusto
              distinctio molestias dolorem ab fugit aut odio?
            </p>
            <div className='review-stars py-2 flex gap-1'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            </div>
            <p className="w-[100%] flex justify-end italic font-light px-8">- person_name</p>
          </div>
         {/* ))}  */}
         <div
            className="lg:w-[30%] md:w-[40%] sm:w-[100%] border-4 border-mainGreen p-4 rounded-xl"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo quisquam, sequi
              saepe tenetur optio velit ex consectetur necessitatibus modi facere possimus iusto
              distinctio molestias dolorem ab fugit aut odio?
            </p>
            <div className='review-stars py-2 flex gap-1'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            </div>
            <p className="w-[100%] flex justify-end italic font-light px-8">- person_name</p>
          </div>
          <div
            className="lg:w-[30%] md:w-[40%] w-[100%] border-4 border-mainGreen p-4 rounded-xl"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo quisquam, sequi
              saepe tenetur optio velit ex consectetur necessitatibus modi facere possimus iusto
              distinctio molestias dolorem ab fugit aut odio?
            </p>
            <div className='review-stars py-2 flex gap-1'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStarHalfStroke}/>
            </div>
            <p className="w-[100%] flex justify-end italic font-light px-8">- person_name</p>
          </div>
      </div>
    </div>
  );
};

export default HomePart3;
