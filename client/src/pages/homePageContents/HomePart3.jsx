import React from 'react';

const HomePart3 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-4 p-8 ">
      <p className="capitalize font-semibold text-2xl italic w-[100%]">testimonials</p>
      <div className="card border-4 border-mainGreen p-4 rounded-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quo quisquam, sequi saepe
          tenetur optio velit ex consectetur necessitatibus modi facere possimus iusto distinctio
          molestias dolorem ab fugit aut odio?
        </p>
        <p className="w-[100%] flex justify-end italic font-light px-8">- person_name</p>
      </div>
    </div>
  );
};

export default HomePart3;
