import React from 'react';

function PackagePage() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Best Value</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-lg shadow-md px-6 py-8">
            <h3 className="text-xl font-medium mb-2">10 Lesson Pack</h3>
            <p className="text-gray-500 mb-4">For achieving short term goals</p>
            <span className="text-3xl font-bold mb-2">$180</span>
            <ul className="flex flex-col items-center space-y-2">
              <li className="text-green-500">✔ 10 Group lessons</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
              <li className="text-gray-500">Valid for 3 months</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Select
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md px-6 py-8 text-center">
            <h3 className="text-xl font-medium mb-2">Monthly Unlimited</h3>
            <p className="text-gray-500 mb-4">Every month</p>
            <span className="text-3xl font-bold mb-2">$250</span>
            <ul className="flex flex-col items-center space-y-2">
              <li className="text-green-500">✔ Unlimited lessons</li>
              <li className="text-green-500">✔ Unlimited practice materials</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
              <li className="text-green-500">✔ Priority support</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Select
            </button>
          </div>
          <div className="text-center bg-white rounded-lg shadow-md px-6 py-8">
            <h3 className="text-xl font-medium mb-2">Weekly Unlimited</h3>
            <p className="text-gray-500 mb-4">Every month</p>
            <span className="text-3xl font-bold mb-2">$75</span>
            <ul className="flex flex-col items-center space-y-2">
              <li className="text-green-500">✔ 4 lessons</li>
              <li className="text-green-500">✔ Unlimited practice materials</li>
              <li className="text-green-500">✔ Online resources</li>
              <li className="text-green-500">✔ Weekly newsletter</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagePage;
