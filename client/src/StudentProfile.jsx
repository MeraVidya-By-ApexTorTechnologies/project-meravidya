// src/StudentProfile.jsx
import React from 'react';

const StudentProfile = () => {
  const student = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://studyinthestates.dhs.gov/sites/default/files/photodune-2833106-female-student-smiling-m.jpg',
    bio: 'A passionate learner.',
    posts: [
      { id: 1, title: 'My First Post', date: '2023-05-01' },
      { id: 2, title: 'Learning React', date: '2023-06-15' },
    ],
    completedCourses: [
      { id: 1, title: 'Introduction to Programming' },
      { id: 2, title: 'Advanced React' },
    ],
    purchasedCourses: [
      { id: 1, title: 'Data Structures and Algorithms', inductionDate: '2024-07-01' },
      { id: 2, title: 'Machine Learning Basics', inductionDate: '2024-07-15' },
    ],
  };

  return (
    <div className="min-h-screen bg-black-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src={student.avatar} alt="Avatar" className="w-32 h-32 rounded-full mr-6 mb-4 md:mb-0" />
          <div>
            <h1 className="text-2xl text-black font-bold">{student.name}</h1>
            <p className=" text-gray-600">{student.email}</p>
            <p className="mt-4 text-black">{student.bio}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl text-black font-bold mb-4">Posts</h2>
          <ul className="space-y-2">
            {student.posts.map((post) => (
              <li key={post.id} className="p-4 bg-gray-50 rounded-lg shadow">
                <h2 className="text-xl text-black ">{post.title}</h2>
                <p className="text-gray-600">Posted on: {post.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl text-black font-bold mb-4">Completed Courses</h2>
          <ul className="space-y-2">
            {student.completedCourses.map((course) => (
              <li key={course.id} className="p-4 bg-gray-50  text-black rounded-lg shadow">
                <h3 className="text-xl ">{course.title}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl text-black font-bold mb-4">Purchased Courses</h2>
          <ul className="space-y-2">
            {student.purchasedCourses.map((course) => (
              <li key={course.id} className="p-4 bg-gray-50 rounded-lg shadow">
                <h3 className="text-xl text-black ">{course.title}</h3>
                <p className="text-gray-600">Induction Date: {course.inductionDate}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
