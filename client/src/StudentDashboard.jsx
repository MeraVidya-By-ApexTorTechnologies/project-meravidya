// src/StudentDashboard.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [notifications] = useState([
    { message: 'Assignment due tomorrow', date: '2024-06-22' },
    { message: 'New course available', date: '2024-06-21' },
  ]);

  const [progress] = useState([
    { name: 'Introduction to Programming', completionRate: 75 },
    { name: 'Advanced React', completionRate: 50 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/Signin'); // Redirect to the login page after logging out
  };

  const [announcements] = useState([
    { message: 'Welcome to the new semester!', date: '2024-06-20' },
    { message: 'Midterm exam scheduled', date: '2024-06-18' },
  ]);

  const [assignments] = useState([
    { title: 'Project Proposal', dueDate: '2024-07-01' },
    { title: 'Homework 1', dueDate: '2024-06-25' },
  ]);

  const [materials] = useState([
    { title: 'Syllabus', link: '/path/to/syllabus.pdf' },
    { title: 'Lecture 1 Notes', link: '/path/to/lecture1.pdf' },
  ]);

  const [grades] = useState([
    { assignment: 'Homework 1', grade: 'A', feedback: 'Great job!' },
    { assignment: 'Quiz 1', grade: 'B+', feedback: 'Well done, but room for improvement.' },
  ]);

  const [messages] = useState([
    { user: 'Instructor', text: 'Please review the project guidelines.' },
    { user: 'Student', text: 'Can we get an extension on the homework?' },
  ]);

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Sidebar setIsModalOpen={setIsModalOpen} setSearchQuery={setSearchQuery} searchQuery={searchQuery} handleSearch={handleSearch} setTheme={setTheme} theme={theme} />
      <MainContent announcements={announcements} assignments={assignments} materials={materials} grades={grades} messages={messages} notifications={notifications} progress={progress} />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 sm:mx-0">
            <h2 className="text-2xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ setIsModalOpen, setSearchQuery, searchQuery, handleSearch, setTheme, theme }) => {
  return (
    <div className="w-64 bg-blue-800 text-white flex flex-col">
      <div className="p-6 text-center font-bold text-2xl">Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full mb-2 text-black"
              placeholder="Search for courses, assignments, or resources"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </li>
          <li><Link to="/" className="block p-2 rounded hover:bg-blue-700 text-center">Home</Link></li>
          <li><Link to="/settings" className="block p-2 rounded hover:bg-blue-700 text-center">Settings</Link></li>
          <li><Link to="/studentprofile" className="block p-2 rounded hover:bg-blue-700 text-center">Profile</Link></li>
          <li><Link to="/courses" className="block p-2 rounded hover:bg-blue-700 text-center">Courses</Link></li>
          <li><Link to="/assignments" className="block p-2 rounded hover:bg-blue-700 text-center">Assignments</Link></li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
              className="block p-2 rounded hover:bg-blue-700 text-center"
            >
              Logout
            </a>
          </li>
          <li>
            <div className="mt-4">
              <label className="block text-gray-300 mb-2">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-full text-black"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MainContent = ({ announcements, assignments, materials, grades, messages, notifications, progress }) => {
  return (
    <div className="flex-1 p-6">
      <Header />
      <Section title="Recent Announcements">
        <ul>
          {announcements.map((announcement, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p>{announcement.message}</p>
              <span className="text-sm text-gray-600">{announcement.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Upcoming Assignments">
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p>{assignment.title}</p>
              <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
              <Link to="/submit" className="ml-4 text-blue-600 hover:underline">Submit</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Course Materials">
        <ul>
          {materials.map((material, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {material.title}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Grades and Feedback">
        <ul>
          {grades.map((grade, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p>{grade.assignment}: <span className="font-bold">{grade.grade}</span></p>
              <p className="text-sm text-gray-600">{grade.feedback}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Discussion Forum">
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p><span className="font-bold">{message.user}:</span> {message.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Notifications">
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
              <p>{notification.message}</p>
              <span className="text-sm text-gray-600">{notification.date}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Progress Tracking">
        {progress.map((course, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${course.completionRate}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{course.completionRate}% completed</p>
          </div>
        ))}
      </Section>
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-end items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="https://studyinthestates.dhs.gov/sites/default/files/photodune-2833106-female-student-smiling-m.jpg" alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
        <span className="text-lg font-medium">Student Name</span>
      </div>
    </header>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

export default StudentDashboard;
