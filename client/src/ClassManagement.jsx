import React, { useState, useEffect } from 'react';

const ClassManagement = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [scheduledLessons, setScheduledLessons] = useState([]);
  const [students, setStudents] = useState([]);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [newLesson, setNewLesson] = useState({
    title: '',
    objectives: '',
    date: '',
    time: '',
    student: '',
    materials: [],
  });

  // Mock data for demonstration
  useEffect(() => {
    // Mock lesson plans
    const mockLessonPlans = [
      {
        id: 1,
        title: 'Introduction to Algebra',
        objectives: 'Learn basic algebraic operations',
        materials: ['Worksheet: Algebra Basics', 'Presentation: Introduction to Algebra'],
      },
      {
        id: 2,
        title: 'Newton\'s Laws of Motion',
        objectives: 'Understand Newton\'s laws and their applications',
        materials: ['Worksheet: Newton\'s Laws', 'Video: Applications of Newton\'s Laws'],
      },
    ];

    // Mock scheduled lessons
    const mockScheduledLessons = [
      { id: 1, title: 'Introduction to Algebra', date: '2024-07-10', time: '10:00 AM', student: 'Student A' },
      { id: 2, title: 'Newton\'s Laws of Motion', date: '2024-07-12', time: '2:00 PM', student: 'Student B' },
    ];

    // Mock student list
    const mockStudents = ['Student A', 'Student B', 'Student C'];

    setLessonPlans(mockLessonPlans);
    setScheduledLessons(mockScheduledLessons);
    setStudents(mockStudents);
  }, []);

  const handleLessonInputChange = (e) => {
    const { name, value } = e.target;
    setNewLesson({ ...newLesson, [name]: value });
  };

  const handleLessonSubmit = (e) => {
    e.preventDefault();
    const newLessonItem = { ...newLesson, id: Date.now() };
    setLessonPlans([...lessonPlans, newLessonItem]);
    setNewLesson({ title: '', objectives: '', date: '', time: '', student: '', materials: [] });
    setShowLessonModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Class Management</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {/* Lesson Planning Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-black mb-4">Lesson Planning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonPlans.map((lesson) => (
              <div key={lesson.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-gray-900 font-medium">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{lesson.objectives}</p>
                <ul className="mt-4">
                  {lesson.materials.map((material, index) => (
                    <li key={index} className="text-sm text-gray-600">{material}</li>
                  ))}
                </ul>
                {/* Additional actions if needed */}
              </div>
            ))}
          </div>
          {/* Button to add new lesson */}
          <button
            onClick={() => setShowLessonModal(true)}
            className="bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add New Lesson
          </button>
          {/* Modal for adding new lesson */}
          {showLessonModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-black mb-4">Create New Lesson</h2>
                <form onSubmit={handleLessonSubmit}>
                  <div className="mb-4">
                    <label htmlFor="lessonTitle" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                      type="text"
                      id="lessonTitle"
                      name="title"
                      value={newLesson.title}
                      onChange={handleLessonInputChange}
                      className="mt-1 block w-full px-3 py-2 text-black border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lessonObjectives" className="block text-sm font-medium text-gray-700">Objectives</label>
                    <textarea
                      id="lessonObjectives"
                      name="objectives"
                      value={newLesson.objectives}
                      onChange={handleLessonInputChange}
                      rows="3"
                      className="mt-1 block w-full px-3 py-2 text-black border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lessonDate" className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      id="lessonDate"
                      name="date"
                      value={newLesson.date}
                      onChange={handleLessonInputChange}
                      className="mt-1 block w-full px-3 text-black py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lessonTime" className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      id="lessonTime"
                      name="time"
                      value={newLesson.time}
                      onChange={handleLessonInputChange}
                      className="mt-1 block w-full px-3 text-black py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lessonStudent" className="block text-sm font-medium text-gray-700">Student</label>
                    <select
                      id="lessonStudent"
                      name="student"
                      value={newLesson.student}
                      onChange={handleLessonInputChange}
                      className="mt-1 block w-full px-3 py-2 text-black border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    >
                      <option value="">Select Student</option>
                      {students.map((student, index) => (
                        <option key={index} value={student}>{student}</option>
                      ))}
                    </select>
                  </div>
                  {/* Add materials upload/linking if needed */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Lesson
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Scheduled Lessons Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-black mb-4">Scheduled Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scheduledLessons.map((lesson) => (
              <div key={lesson.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg text-gray-900 font-medium">{lesson.title}</h3>
                <p className="text-sm text-gray-600">{lesson.date} at {lesson.time}</p>
                <p className="text-sm text-gray-600">Student: {lesson.student}</p>
                {/* Additional actions if needed */}
              </div>
            ))}
          </div>
        </section>

        {/* Student Management, Communication, etc., sections can be added similarly */}
      </main>
    </div>
  );
};

export default ClassManagement;
