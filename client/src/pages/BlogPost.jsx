import React from 'react';

function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">The Power of Tailwind CSS</h1>
        <p className="text-mainGreen text-sm">By John Doe on June 23, 2024</p>
      </header>
      <img
        className="w-full rounded-lg shadow-md mb-4"
        src="https://static.wixstatic.com/media/2190eb_48369fed94504ee9bd8e3d2b09735b08~mv2.webp"
        alt="Blog post image"
      />
      <div className="prose prose-sm mx-auto">
        <p>
          Tailwind CSS is a utility-first CSS framework that allows you to rapidly build modern websites with highly customizable components. It provides a collection of low-level utility classes that can be combined to achieve a wide range of design effects.
        </p>
        <p>
          Here are some of the benefits of using Tailwind CSS:
        </p>
        <ul className="list-disc pl-4">
          <li>Rapid development: Tailwind's utility classes allow you to write CSS directly in your HTML, making it a very quick and efficient way to style your components.</li>
          <li>Highly customizable: With Tailwind, you have complete control over the styles of your website. You can combine different utility classes to achieve the exact look and feel you desire.</li>
          <li>Responsive design: Tailwind provides a set of responsive utility classes that make it easy to create websites that adapt to different screen sizes.</li>
        </ul>
        <p>Overall, Tailwind CSS is a powerful and versatile framework that can be a great asset for web developers of all skill levels.</p>
      </div>
      <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">The Power of Tailwind CSS</h1>
        <p className="text-mainGreen text-sm">By John Doe on June 23, 2024</p>
      </header>
      <img
        className="w-full rounded-lg shadow-md mb-4"
        src="https://static.wixstatic.com/media/2190eb_48369fed94504ee9bd8e3d2b09735b08~mv2.webp"
        alt="Blog post image"
      />
      <div className="prose prose-sm mx-auto">
        <p>
          Tailwind CSS is a utility-first CSS framework that allows you to rapidly build modern websites with highly customizable components. It provides a collection of low-level utility classes that can be combined to achieve a wide range of design effects.
        </p>
        <p>
          Here are some of the benefits of using Tailwind CSS:
        </p>
        <ul className="list-disc pl-4">
          <li>Rapid development: Tailwind's utility classes allow you to write CSS directly in your HTML, making it a very quick and efficient way to style your components.</li>
          <li>Highly customizable: With Tailwind, you have complete control over the styles of your website. You can combine different utility classes to achieve the exact look and feel you desire.</li>
          <li>Responsive design: Tailwind provides a set of responsive utility classes that make it easy to create websites that adapt to different screen sizes.</li>
        </ul>
        <p>Overall, Tailwind CSS is a powerful and versatile framework that can be a great asset for web developers of all skill levels.</p>
      </div>
    </div>
  );
}

export default BlogPost;
