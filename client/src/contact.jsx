import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Left side content */}
        <motion.div
          className="flex flex-col justify-center items-center md:items-start p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-black">Contact Us</h1>
          <h2 className="text-2xl font-bold mb-4 text-black">Let's Get Started</h2>
          <p className="text-lg text-gray-700 mb-4">
            Join us today and embark on a journey of knowledge and skill enhancement like never before.
          </p>
          <motion.button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          >
            Introduction Call
          </motion.button>
        </motion.div>

        {/* Right side form */}
        <motion.div
          className="bg-white rounded-lg shadow-md px-8 py-10 w-full"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-center text-black md:text-left">Contact Us</h1>
          <div className="flex flex-col space-y-4 w-full">
            <form>
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName" className="text-sm text-black font-medium">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="appearance-none rounded-md border text-black border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName" className="text-sm text-black font-medium">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="appearance-none rounded-md border text-black border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm text-black font-medium">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="appearance-none rounded-md border text-black border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-sm text-black font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  className="appearance-none rounded-md border text-black border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="flex flex-col space-y-2 items-center md:items-start">
              <p className="text-gray-500 text-center md:text-left">
                Or reach out to us at:
              </p>
              <p className="text-gray-500 text-center md:text-left">
                <a href="mailto:support@example.com" className="text-blue-500 underline">
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
