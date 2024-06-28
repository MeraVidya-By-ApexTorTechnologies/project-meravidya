import React from 'react'
import { Link } from 'react-router-dom'

const HomePart2 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-4xl font-bold mb-8">Our Latest Blog Posts</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <img
            className="mx-auto rounded-lg shadow-md"
            src="https://static.wixstatic.com/media/2190eb_48369fed94504ee9bd8e3d2b09735b08~mv2.webp"
            alt="trophy"
          />
          <h3 className="text-center mt-2 text-lg font-bold">Empower Your Learning...</h3>
          <p className="text-center text-white-700">
            Are you looking to enhance your learning journey with expert tutors?
          </p>
          <div className="flex justify-center">
          <Link to="/BlogPost">
      <button className="px-4 py-2 bg-mainGreen text-white rounded-lg hover:bg-mainGreen focus:outline-none">
        Learn More
      </button>
    </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img
            className="mx-auto rounded-lg shadow-md"
            src="https://static.wixstatic.com/media/2190eb_48369fed94504ee9bd8e3d2b09735b08~mv2.webp"
            alt="books"
          />
          <h3 className="text-center mt-2 text-lg font-bold">Discover the Best Nearby...</h3>
          <p className="text-center text-white-700">
            Are you looking for the perfect tutor to help you excel in your studies or prepare for exams?
          </p>
          <div className="flex justify-center">
          <Link to="/BlogPost">
      <button className="px-4 py-2 bg-mainGreen text-white rounded-lg hover:bg-mainGreen focus:outline-none">
        Learn More
      </button>
    </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <img
            className="mx-auto rounded-lg shadow-md"
            src="https://static.wixstatic.com/media/2190eb_48369fed94504ee9bd8e3d2b09735b08~mv2.webp"
            alt="lightbulb"
          />
          <h3 className="text-center mt-2 text-lg font-bold">Unlock Your Potential...</h3>
          <p className="text-center text-white-700">
            Do you often find yourself struggling to grasp certain concepts at school?
          </p>
          <div className="flex justify-center">
          <Link to="/BlogPost">
      <button className="px-4 py-2 bg-mainGreen text-white rounded-lg hover:bg-mainGreen focus:outline-none">
        Learn More
      </button>
    </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePart2