import React from 'react';
import { motion } from 'framer-motion';

const InductionCall = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black text-center mb-8">
            Book an Induction Call
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Welcome to our platform! We are excited to help you get started. Book an induction call with one of our experts to learn more about our services and how we can help you achieve your goals.
          </p>
          <form className="space-y-8">
            <div className="flex flex-col space-y-4">
              <div className="w-full">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm lg:text-base p-4"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm lg:text-base p-4"
                />
              </div>
              <div className="w-full">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm lg:text-base p-4"
                />
              </div>
              <div className="w-full">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <input
                  id="time"
                  type="time"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm lg:text-base p-4"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message here"
                  className="mt-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm lg:text-base p-4"
                ></textarea>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InductionCall;
