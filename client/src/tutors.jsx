import React, { useState } from 'react';

const tutors = [
  {
    name: 'John Doe',
    subject: 'Mathematics',
    image: 'https://tse4.mm.bing.net/th?id=OIP.TkQMrwM3dH7hTu6VamFAGQHaHa&pid=Api&P=0&h=220',
    bio: 'John has a PhD in Mathematics and 10 years of teaching experience.',
    rating: 4.8,
    availability: 'Mon-Fri, 9am-5pm',
    expertise: 'Calculus, Algebra',
    location: 'New York, USA',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe'
  },
  {
    name: 'Jane Smith',
    subject: 'Science',
    image: 'https://tse4.mm.bing.net/th?id=OIP.TkQMrwM3dH7hTu6VamFAGQHaHa&pid=Api&P=0&h=220',
    bio: 'Jane is a passionate Science teacher with 8 years of experience.',
    rating: 4.5,
    availability: 'Tue-Thu, 10am-4pm',
    expertise: 'Physics, Chemistry',
    location: 'Los Angeles, USA',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith'
  },
  {
    name: 'Alice Johnson',
    subject: 'English',
    image: 'https://tse4.mm.bing.net/th?id=OIP.TkQMrwM3dH7hTu6VamFAGQHaHa&pid=Api&P=0&h=220',
    bio: 'Alice specializes in English Literature and has been teaching for 5 years.',
    rating: 4.7,
    availability: 'Mon-Wed, 11am-3pm',
    expertise: 'Literature, Writing',
    location: 'Chicago, USA',
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    twitter: 'https://twitter.com/alicejohnson'
  },
  {
    name: 'Bob Brown',
    subject: 'History',
    image: 'https://tse4.mm.bing.net/th?id=OIP.TkQMrwM3dH7hTu6VamFAGQHaHa&pid=Api&P=0&h=220',
    bio: 'Bob has a Master’s degree in History and loves sharing knowledge.',
    rating: 4.6,
    availability: 'Mon-Fri, 1pm-6pm',
    expertise: 'World History, American History',
    location: 'San Francisco, USA',
    linkedin: 'https://www.linkedin.com/in/bobbrown',
    twitter: 'https://twitter.com/bobbrown'
  },
  // Add more tutors as needed
];

function Tutors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterSubject(event.target.value);
  };

  const filteredTutors = tutors
    .filter(tutor => 
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSubject === '' || tutor.subject === filterSubject)
    );

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-bold text-black text-center mb-8">Meet Our Tutors!!</h2>
        <div className="mb-8 flex justify-between items-center">
          <input 
            type="text"
            placeholder="Search tutors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border text-black rounded px-4 py-2"
          />
          <select 
            value={filterSubject}
            onChange={handleFilterChange}
            className="border text-black  rounded px-4 py-2"
          >
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
            {/* Add more subjects as needed */}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredTutors.map((tutor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div className="text-center">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black mb-2">{tutor.name}</h3>
                <p className="text-gray-500 mb-4">{tutor.subject}</p>
                <p className="text-gray-700">{tutor.bio}</p>
                <p className="text-yellow-500 mt-2">Rating: {tutor.rating}</p>
                <p className="text-gray-600 mt-2">Availability: {tutor.availability}</p>
                <p className="text-gray-600 mt-2">Expertise: {tutor.expertise}</p>
                <p className="text-gray-600 mt-2">Location: {tutor.location}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href={tutor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                  <a href={tutor.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Twitter
                  </a>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tutors;
