import React, { useState, useEffect } from 'react';

const StudentManagement = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    studentName: '',
    gradeLevel: '',
    emailAddress: '',
  });

  // Mock data for demonstration
  useEffect(() => {
    // Mock enrolled students
    const mockEnrolledStudents = [
      { id: 1, name: 'Student A', grade: 'Grade 9', email: 'studenta@example.com', attendance: '90%', progress: 'Good', notes: 'Active participant' },
      { id: 2, name: 'Student B', grade: 'Grade 10', email: 'studentb@example.com', attendance: '85%', progress: 'Average', notes: 'Needs more focus' },
      { id: 3, name: 'Student C', grade: 'Grade 11', email: 'studentc@example.com', attendance: '95%', progress: 'Excellent', notes: 'Top performer' },
    ];

    setEnrolledStudents(mockEnrolledStudents);
  }, []);

  const handleRemoveStudent = (id) => {
    const updatedEnrolledStudents = enrolledStudents.filter((student) => student.id !== id);
    setEnrolledStudents(updatedEnrolledStudents);
  };

  const handleSendMessage = (studentId) => {
    // Implement logic to send message to student with ID: studentId
    console.log(`Sending message to student with ID: ${studentId}`);
  };

  const handleEnrollModalOpen = () => {
    setShowEnrollModal(true);
  };

  const handleEnrollModalClose = () => {
    setShowEnrollModal(false);
    // Reset the new student form fields
    setNewStudent({
      studentName: '',
      gradeLevel: '',
      emailAddress: '',
    });
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    // Implement logic to enroll new student
    const newEnrolledStudent = {
      id: Date.now(),
      name: newStudent.studentName,
      grade: newStudent.gradeLevel,
      email: newStudent.emailAddress,
      attendance: 'N/A',
      progress: 'N/A',
      notes: 'Newly enrolled',
    };
    setEnrolledStudents([...enrolledStudents, newEnrolledStudent]);
    setShowEnrollModal(false);
    // Reset the new student form fields
    setNewStudent({
      studentName: '',
      gradeLevel: '',
      emailAddress: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Student Management</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-lg text-black font-bold mb-4">Enrolled Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledStudents.map((student) => (
              <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-gray-900 font-medium">{student.name}</h3>
                <p className="text-sm text-gray-600">{student.grade}</p>
                <p className="text-sm text-gray-600">Email: {student.email}</p>
                <p className="text-sm text-gray-600">Attendance: {student.attendance}</p>
                <p className="text-sm text-gray-600">Progress: {student.progress}</p>
                <p className="text-sm text-gray-600">Notes: {student.notes}</p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleRemoveStudent(student.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleSendMessage(student.id)}
                    className="text-sm text-indigo-600 hover:text-indigo-700"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Button to enroll new student */}
        <button
          onClick={handleEnrollModalOpen}
          className="bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Enroll New Student
        </button>

        {/* Modal for enrolling new student */}
        {showEnrollModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg text-black font-bold mb-4">Enroll New Student</h2>
              {/* Form to enroll new student */}
              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={newStudent.studentName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full text-black px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700">Grade Level</label>
                  <input
                    type="text"
                    id="gradeLevel"
                    name="gradeLevel"
                    value={newStudent.gradeLevel}
                    onChange={handleInputChange}
                    className="mt-1 block w-full text-black px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={newStudent.emailAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 text-black py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleEnrollModalClose}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md mr-4 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Enroll
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default StudentManagement;
