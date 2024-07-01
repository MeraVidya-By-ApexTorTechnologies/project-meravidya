// src/Assignments.jsx
import React, { useState } from 'react';

const Assignments = () => {
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    submission: null,
    dueDate: '',
    estimatedTime: '',
    sampleWork: '',
    discussion: '',
    peerReview: false,
    progress: 0,
    rubric: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      submission: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assignment submitted:', assignment);
  };

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-black font-bold mb-6">Assignment Submission</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 mb-2">Assignment Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={assignment.title}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={assignment.description}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="submission" className="block text-gray-700 mb-2">Submission</label>
            <input
              type="file"
              id="submission"
              name="submission"
              onChange={handleFileChange}
              className="w-full p-2 border text-black  border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-gray-700 mb-2">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={assignment.dueDate}
              onChange={handleChange}
              className="w-full p-2 border text-black  border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="estimatedTime" className="block text-gray-700 mb-2">Estimated Time</label>
            <input
              type="text"
              id="estimatedTime"
              name="estimatedTime"
              value={assignment.estimatedTime}
              onChange={handleChange}
              className="w-full p-2 border text-black  border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sampleWork" className="block text-gray-700 mb-2">Sample Work</label>
            <textarea
              id="sampleWork"
              name="sampleWork"
              value={assignment.sampleWork}
              onChange={handleChange}
              className="w-full p-2 border  text-black border-gray-300 rounded-lg"
              rows="2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="discussion" className="block text-gray-700 mb-2">Discussion Forum</label>
            <textarea
              id="discussion"
              name="discussion"
              value={assignment.discussion}
              onChange={handleChange}
              className="w-full p-2 border  text-black  border-gray-300 rounded-lg"
              rows="2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="peerReview" className="block text-gray-700 mb-2">Peer Review</label>
            <input
              type="checkbox"
              id="peerReview"
              name="peerReview"
              checked={assignment.peerReview}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Enable peer review</span>
          </div>
          <div className="mb-4">
            <label htmlFor="progress" className="block text-gray-700 mb-2">Progress</label>
            <input
              type="range"
              id="progress"
              name="progress"
              value={assignment.progress}
              onChange={handleChange}
              className="w-full"
              min="0"
              max="100"
              
            />
            <span className="text-gray-700">{assignment.progress}%</span>
          </div>
          <div className="mb-4">
            <label htmlFor="rubric" className="block text-gray-700 mb-2">Rubric</label>
            <textarea
              id="rubric"
              name="rubric"
              value={assignment.rubric}
              onChange={handleChange}
              className="w-full p-2 border text-black  border-gray-300 rounded-lg"
              rows="4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-mainGreen text-white rounded-lg hover:bg-mainGreen transition duration-200"
            >
              Submit Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Assignments;
