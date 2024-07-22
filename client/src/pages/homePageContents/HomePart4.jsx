import React from 'react';
import { FlowImg1, FlowImg2, FlowImg3, FlowImg4, FlowImg5 } from '../../assets/images/homeFlows';
import '../../styles/homepart4.css';
import Sticker from './Sticker'
const HomePart4 = () => {
  return (
    <div className="p-8 w-screen">
      <p className="capitalize text-4xl font-bold ">how meravidya works?</p>
      <div className="grid gap-8 md:gap-2 sm:grid-rows-10 md:grid-cols-2 md:grid-rows-5 w-[100%]">
        {/* 1 */}
        <div className="flex flex-col justify-center items-center gap-4">
            <Sticker number='1'/>
          <p className="font-semibold text-2xl capitalize ">course exploration</p>
          <p className="italic text-center">
            Students browse through a diverse range of courses available on MeraVidya's platform,
            covering various subjects and interests.
          </p>
        </div>
        {/* 2 */}
        <div className="flex justify-center items-center sm:row-start-2 md:row-start-1 md:col-start-2">
          <img src={FlowImg4} alt="cant load image" />
        </div>
        {/* 3 */}
        <div className="sm:row-start-3 md:col-start-2 md:row-start-2 flex flex-col justify-center items-center gap-4">
        <Sticker number='2'/>
          <p className="font-semibold text-2xl capitalize ">Selection and Enrollment</p>
          <p className="italic text-center">
          We offer both online and offline courses, catering to diverse preferences.
          </p>
        </div>
        {/* 4 */}
        <div className="flex justify-center items-center sm:row-start-4 md:row-start-2 md:col-start-1">
          <img src={FlowImg5} alt="cant load image" />
        </div>
        {/* 5 */}
        <div className="md:col-start-1 md:row-start-3 sm:row-start-5 flex flex-col gap-4 justify-center items-center ">
        <Sticker number='3'/>
          <p className="font-semibold text-2xl capitalize ">Finding Nearby Tutors</p>
          <p className="italic text-center">
          Students connect with nearby tutors for personalized support, enhancing learning.
          </p>
        </div>
        {/* 6 */}
        <div className="flex justify-center items-center sm:row-start-6 md:row-start-3 md:col-start-2 ">
          <img src={FlowImg3} alt="cant load image" />
        </div>
        {/* 7 */}
        <div className="md:col-start-2 md:row-start-4 sm:row-start-7 flex flex-col gap-4 justify-center items-center">
        <Sticker number='4'/>
          <p className="font-semibold text-2xl capitalize ">Learning Experience</p>
          <p className="italic text-center">
            Students thrive in interactive courses, nurturing curiosity, creativity, and critical
            thinking.
          </p>
        </div>
        {/* 8 */}
        <div className="flex justify-center items-center sm:row-start-8 md:row-start-4 md:col-start-1">
          <img src={FlowImg4} alt="cant load image" />
        </div>
        {/* 9 */}
        <div className="md:col-start-1 md:row-start-5 sm:row-start-9 flex flex-col gap-4 justify-center items-center">
        <Sticker number='5'/>
          <p className="font-semibold text-2xl capitalize ">Feedback and Support</p>
          <p className="italic text-center">
            Throughout the learning journey, students provide feedback to MeraVidya, helping to
            improve the platform and course offerings. Additionally, students have access to support
            resources whenever needed, ensuring a seamless learning experience.
          </p>
        </div>
        {/* 10 */}
        <div className="flex justify-center items-center sm:row-start-10 md:row-start-5 md:col-start-2">
          <img src={FlowImg5} alt="cant load image" />
        </div>
      </div>
    </div>
  );
};

export default HomePart4;
