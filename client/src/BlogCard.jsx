// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl text-black font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-500 mb-4">{blog.date}</p>
      <p className="text-gray-700">{blog.excerpt}</p>
      <Link to={`/blogs/${blog.id}`} className="text-blue-500 text-black hover:underline mt-2 block">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
