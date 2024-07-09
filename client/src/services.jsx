import React from 'react';



function Services() {
  return (

    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-black text-center mb-8">Explore Our Classes</h2>
        <p className="text-base font-bold text-black font-medium text-center mb-8">
          At MeraVidya, we're dedicated to your educational journey.
          <br />
          Our personalized tutoring caters to your unique learning style. With flexible
          <br />
          scheduling, lessons fit seamlessly into your busy life. Expert instructors
          <br />
          ensure you thrive in diverse subjects and skills.
        </p>
        <h2 className="text-3xl font-bold text-black font-large text-center mb-8">Start learning today</h2>
        <hr className="border-b border-black h-px opacity-5000 " />

        <div className=" rounded-lg  px-8 py-8">
          <p className="text-2xl text-black mb-4 px-4 py-2 ">Introduction Call</p>
          <a href="/your-target-page" className="text-base text-blue-500 px-4 py-2 block  hover:underline">
            Read More
          </a>
          <div className="flex justify-between items-center ">
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Online/Offline</p>
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">30 min</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
        <hr className="border-b border-black h-px opacity-5000 my-2" />

        <div className=" rounded-lg  px-8 py-8">
          <p className="text-2xl text-black mb-4 px-4 py-2 ">Sports Classes</p>
          <a href="/your-target-page" className="text-base text-blue-500 px-4 py-2 block  hover:underline">
            Read More
          </a>
          <div className="flex justify-between items-center mb-4">
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Online/Offline</p>
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Tue, Wed, Thu <br /> 1 hr <br /> ₹1,000</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
        <hr className="border-b border-black h-px opacity-5000 " />

        <div className=" rounded-lg  px-8 py-8">
          <p className="text-2xl text-black mb-4 px-4 py-2 ">Dance Classes</p>
          <a href="/your-target-page" className="text-base text-blue-500 px-4 py-2 block  hover:underline">
            Read More
          </a>
          <div className="flex justify-between items-center mb-4">
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Online/Offline</p>
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Wed, Thu <br />1 hr <br /> ₹1,000</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
        <hr className="border-b border-black h-px opacity-5000 " />

        <div className=" rounded-lg  px-8 py-8">
          <p className="text-2xl text-black mb-4 px-4 py-2 ">Academic Tuitions</p>
          <a href="/your-target-page" className="text-base text-blue-500 px-4 py-2 block  hover:underline">
            Read More
          </a>
          <div className="flex justify-between items-center mb-4">
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Online/Offline</p>
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Mon, Tue, Wed, Thu <br />1 hr <br /> ₹1,000</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
        <hr className="border-b border-black h-px opacity-5000 " />

        <div className=" rounded-lg  px-8 py-8">
          <p className="text-2xl text-black mb-4 px-4 py-2 ">Arts Classes</p>
          <a href="/your-target-page" className="text-base text-blue-500 px-4 py-2 block  hover:underline">
            Read More
          </a>
          <div className="flex justify-between items-center mb-4">
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Online/Offline</p>
            <p className="text-base justify-center mb-4 px-4 py-2 text-black">Mon, Tue, Wed, Thu <br />1 hr <br /> ₹1,000</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
        <hr className="border-b border-black h-px opacity-5000 " />






        <h2 className="text-3xl font-bold text-black text-center  px-2 py-4 mb-8">Packages</h2>
        <p className="text-base font-normal text-black text-center mb-8">
          Unlock your academic potential with MeraVidya's tailored packages.
          <br />
          Whether you're starting out or aiming for advanced tutoring, we have the
          <br />
          perfect package to suit your needs. Choose MeraVidya today and elevate
          <br />
          your learning experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-lg shadow-md px-6 py-8 transition-transform transform hover:scale-105">
            <h3 className="text-3xl text-black font-normal font-bold mb-2">10 Lesson Pack</h3>
            <p className="text-gray-500 mb-4 px-4 py-2">For achieving short term goals</p>
            <span className="text-6xl text-black font-bold mb-4 px-4 py-2">₹ 180</span>
            <ul className="flex flex-col items-center space-y-1 py-6">
              <li className="text-green-500">✔ 10 Group lessons</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
              <li className="text-gray-500 px-4 py-2">Valid for 3 months</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Select
            </button>
          </div>
          <div className="text-center bg-white rounded-lg border-4 border-green-400 shadow-md px-6 py-8 transition-transform transform hover:scale-105">
            <h3 className="text-3xl text-black font-normal font-bold mb-2">Monthly <br />Unlimited</h3>
            <p className="text-gray-500 mb-4">Every Month</p>
            <span className="text-6xl text-black font-bold mb-4 px-4 py-2">₹ 250</span>
            <ul className="flex flex-col px-4 py-2 items-center space-y-1 py-6">
              <li className="text-green-500">✔ Unlimited lessons</li>
              <li className="text-green-500">✔ Unlimited practice materials</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
              <li className="text-green-500">✔ Priority support</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Select
            </button>
          </div>
          <div className="text-center bg-white rounded-lg shadow-md px-6 py-8 transition-transform transform hover:scale-105">
            <h3 className="text-3xl text-black font-normal font-bold mb-2">Weekly<br /> Tutoring</h3>
            <p className="text-gray-500 mb-4">Every Month</p>
            <span className="text-6xl text-black font-bold mb-4 px-4 py-2">₹ 75</span>
            <ul className="flex flex-col px-4 py-2 items-center space-y-1 py-6">
              <li className="text-green-500">✔ 4 lessons</li>
              <li className="text-green-500">✔ Unlimited practice materials</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
