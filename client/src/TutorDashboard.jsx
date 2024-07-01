import React from 'react';
import { Link } from 'react-router-dom';

const TutorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-indigo-600 text-white py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Tutor Dashboard</h1>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="w-64 bg-white shadow-md">
          <ul className="p-4 space-y-2">
            <li>
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">Profile</Link>
            </li>
            <li>
              <Link to="/my-courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">My Courses</Link>
            </li>
            <li>
              <Link to="/messages" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">Messages</Link>
            </li>
            <li>
              <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">Settings</Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-6">
        <div className="mx-auto max-w-7xl  space-y-4 text-black px-4 py-6 sm:px-6 lg:px-8 md:pt-8">
          <h2>Welcome, [Tutor Name]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Upcoming Classes</h3>
              <Link to="/UpcomingClasses" className="text-blue-500">View All</Link>
            </div>
            {/* Class Management */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Class Management</h3>
              <Link to="/ClassManagement" className="text-blue-500">View All</Link>
            </div>
            {/* Student Management */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Student Management</h3>
              <Link to="/StudentManagement" className="text-blue-500">View All</Link>
            </div>
            {/* Assignments and Assessments */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Assignments and Assessments</h3>
              <Link to="/AssignmentsAssessments" className="text-blue-500">View All</Link>
            </div>
            {/* Communication */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Communication</h3>
              {/* Messaging system */}
            </div>
            {/* Resources */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Resources</h3>
              {/* Teaching materials */}
            </div>
            {/* Performance Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Performance Analytics</h3>
              {/* Student progress and analytics */}
            </div>
            {/* Calendar and Scheduling */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Calendar and Scheduling</h3>
              {/* Personal calendar */}
            </div>
            {/* Administrative Tools */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Administrative Tools</h3>
              {/* Profile and account settings */}
            </div>
            {/* Support and Feedback */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg text-black font-medium">Support and Feedback</h3>
              {/* Help center and feedback form */}
            </div>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
