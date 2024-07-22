import React, { useState, useEffect } from 'react';

const AssignmentsAssessments = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    deadline: '',
  });
  const [showModal, setShowModal] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockAssignments = [
      { id: 1, title: 'Assignment 1', description: 'Complete exercises 1-5', deadline: '2024-07-15' },
      { id: 2, title: 'Assignment 2', description: 'Write an essay on a given topic', deadline: '2024-07-20' },
      { id: 3, title: 'Quiz 1', description: 'Multiple-choice quiz on recent topics', deadline: '2024-07-25' },
    ];
    setAssignments(mockAssignments);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming some validation is done before adding to assignments
    const newAssignmentItem = { ...newAssignment, id: Date.now() };
    setAssignments([...assignments, newAssignmentItem]);
    setNewAssignment({ title: '', description: '', deadline: '' });
    setShowModal(false);
  };

  const handleCancel = () => {
    setNewAssignment({ title: '', description: '', deadline: '' });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Assignments and Assessments</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="bg-white p-6 rounded-lg shadow-md relative">
              <h3 className="text-lg text-gray-900 font-medium">{assignment.title}</h3>
              <p className="text-sm text-gray-600">{assignment.description}</p>
              <p className="text-sm text-gray-600">Deadline: {assignment.deadline}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleDeleteAssignment(assignment.id)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for adding new assignment */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4">Create New Assignment</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newAssignment.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={newAssignment.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={newAssignment.deadline}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md mr-4 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Button to show modal */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add New Assignment
        </button>
      </main>
    </div>
  );
};

export default AssignmentsAssessments;
