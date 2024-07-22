// src/components/BlogList.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulated data (replace with actual fetch logic)
    const fetchedBlogs = [
      {
        id: 1,
        title: 'New Courses Available!',
        date: 'July 1, 2024',
        excerpt: 'Discover our latest courses designed to help you excel in your field.',
      },
      {
        id: 2,
        title: 'Summer Discount - Enroll Now!',
        date: 'June 15, 2024',
        excerpt: 'Take advantage of our special summer discount for new enrollments.',
      },
      {
        id: 3,
        title: 'Student Achievements Celebration',
        date: 'May 20, 2024',
        excerpt: 'Celebrating the accomplishments of our outstanding students.',
      },
    ];

    setBlogs(fetchedBlogs);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-8">Latest Updates and News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
