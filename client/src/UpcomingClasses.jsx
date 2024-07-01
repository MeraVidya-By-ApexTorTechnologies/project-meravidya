import React, { useState, useEffect } from 'react';

const UpcomingClasses = () => {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newClass, setNewClass] = useState({
    title: '',
    date: '',
    time: '',
    enrolledStudents: [],
    attendance: [],
  });
  const [notification, setNotification] = useState(null); // State for notifications
  const [reminders, setReminders] = useState([]);

  // Mock data for demonstration
  useEffect(() => {
    const mockClasses = [
      { id: 1, title: 'Mathematics', date: '2024-07-10', time: '10:00 AM', enrolledStudents: ['Student A', 'Student B'], attendance: [] },
      { id: 2, title: 'Physics', date: '2024-07-12', time: '2:00 PM', enrolledStudents: ['Student C', 'Student D'], attendance: [] },
      { id: 3, title: 'Chemistry', date: '2024-07-15', time: '11:00 AM', enrolledStudents: ['Student E', 'Student F'], attendance: [] },
    ];
    setClasses(mockClasses);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClass({ ...newClass, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming some validation is done before adding to classes
    const newClassItem = { ...newClass, id: Date.now() };
    setClasses([...classes, newClassItem]);
    setNewClass({ title: '', date: '', time: '', enrolledStudents: [], attendance: [] });
    setShowModal(false);
    setNotification(`Class "${newClass.title}" created successfully.`);
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Clear notification after 3 seconds
    // Set reminder if the class is within 24 hours
    const classDate = new Date(newClass.date + 'T' + newClass.time);
    const now = new Date();
    if (classDate > now && classDate.getTime() - now.getTime() <= 24 * 60 * 60 * 1000) {
      setReminders([...reminders, { id: newClassItem.id, title: newClass.title, date: newClass.date, time: newClass.time }]);
    }
  };

  const handleDeleteClass = (id) => {
    const updatedClasses = classes.filter((classItem) => classItem.id !== id);
    setClasses(updatedClasses);
    // Remove reminders for deleted class
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const handleAddStudent = (id, studentName) => {
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === id && !classItem.enrolledStudents.includes(studentName)) {
        return { ...classItem, enrolledStudents: [...classItem.enrolledStudents, studentName] };
      }
      return classItem;
    });
    setClasses(updatedClasses);
  };

  const handleRemoveStudent = (id, studentName) => {
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === id) {
        return { ...classItem, enrolledStudents: classItem.enrolledStudents.filter(student => student !== studentName) };
      }
      return classItem;
    });
    setClasses(updatedClasses);
  };

  const toggleAttendance = (classId, studentName) => {
    const updatedClasses = classes.map((classItem) => {
      if (classItem.id === classId) {
        const updatedAttendance = classItem.attendance.includes(studentName)
          ? classItem.attendance.filter(student => student !== studentName)
          : [...classItem.attendance, studentName];
        return { ...classItem, attendance: updatedAttendance };
      }
      return classItem;
    });
    setClasses(updatedClasses);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Upcoming Classes</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {notification && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{notification}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path fillRule="evenodd" d="M14.348 5.652a.5.5 0 0 1 .708.708l-8 8a.5.5 0 1 1-.708-.708l8-8z" />
                <path fillRule="evenodd" d="M5.652 5.652a.5.5 0 0 0-.708.708l8 8a.5.5 0 0 0 .708-.708l-8-8z" />
              </svg>
            </span>
          </div>
        )}
        {reminders.length > 0 && (
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Reminders</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reminders.map((reminder) => (
                <li key={reminder.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg text-gray-900 font-medium">{reminder.title}</h3>
                  <p className="text-sm text-gray-600">Date: {reminder.date} | Time: {reminder.time}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <h3 className="text-lg text-gray-900 font-medium">
                {classItem.title}
              </h3>
              <p className="text-sm text-gray-600">
                Date: {classItem.date} | Time: {classItem.time}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleDeleteClass(classItem.id)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
              {/* Student management */}
              <div className="mt-4">
                <h4 className="text-sm text-gray-700 font-medium mb-2">Enrolled Students:</h4>
                <ul className="text-sm text-gray-600">
                  {classItem.enrolledStudents.length === 0 ? (
                    <li>No students enrolled yet.</li>
                  ) : (
                    classItem.enrolledStudents.map((student, index) => (
                      <li key={index}>
                        {student}
                        <button
                          onClick={() => handleRemoveStudent(classItem.id, student)}
                          className="ml-2 text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </li>
                    ))
                  )}
                </ul>
                <div className="mt-2">
                  <input
                    type="text"
                    value={newClass.enrolledStudents}
                    onChange={(e) => setNewClass({ ...newClass, enrolledStudents: e.target.value })}
                    placeholder="Enter student name"
                    className="mt-1 block w-full px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  />
                  <button
                    onClick={() => handleAddStudent(classItem.id, newClass.enrolledStudents)}
                    className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Student
                  </button>
                </div>
              </div>
              {/* Attendance tracking */}
              <div className="mt-4">
                <h4 className="text-sm text-gray-700 font-medium mb-2">Attendance:</h4>
                <ul className="text-sm text-gray-600">
                  {classItem.enrolledStudents.length === 0 ? (
                    <li>No students enrolled yet.</li>
                  ) : (
                    classItem.enrolledStudents.map((student, index) => (
                      <li key={index}>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-indigo-600"
                            checked={classItem.attendance.includes(student)}
                            onChange={() => toggleAttendance(classItem.id, student)}
                          />
                          <span className="ml-2">{student}</span>
                        </label>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              {/* Additional class details */}
              <button
                onClick={() => setShowModal(true)}
                className="absolute top-2 right-2 bg-indigo-600 text-white rounded-md px-3 py-1 text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </button>
            </div>
          ))}
          {/* Modal for adding new class */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold text-black mb-4">Create New Class</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={newClass.title}
                      onChange={handleInputChange}
                      className="mt-1 block w-full text-black px-3 py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={newClass.date}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 text-black py-2 border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={newClass.time}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 text-black border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Cancel
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
            Add New Class
          </button>
        </div>
      </main>
    </div>
  );
};

export default UpcomingClasses;
