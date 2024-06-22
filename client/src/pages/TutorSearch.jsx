import React, { useState } from 'react';

const TutorSearch = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);

  const searchTutors = () => {
    if (location.trim() === '') {
      alert('Please enter a location');
      return;
    }

    // Mock API call
    const mockTutors = [
      { name: 'Vyshnavi', subject: 'Math', location: 'Hyderabad' },
      { name: 'Mounika', subject: 'English', location: 'Hyderabad' },
      { name: 'Thejaswi', subject: 'Science', location: 'Chitur' },
      { name: 'Arjun', subject: 'Math', location: 'Mumbai' },
      { name: 'Sana', subject: 'English', location: 'Delhi' },
      { name: 'Ravi', subject: 'Science', location: 'Bangalore' },
      { name: 'Priya', subject: 'Math', location: 'Chennai' },
      { name: 'Amit', subject: 'Physics', location: 'Kolkata' },
      { name: 'Neha', subject: 'Biology', location: 'Pune' },
      { name: 'Rohan', subject: 'Chemistry', location: 'Hyderabad' },
      { name: 'Lakshmi', subject: 'History', location: 'Chennai' },
      { name: 'Karan', subject: 'Geography', location: 'Mumbai' },
      { name: 'Sneha', subject: 'English', location: 'Bangalore' },
      { name: 'Vikas', subject: 'Computer Science', location: 'Delhi' },
      { name: 'Anjali', subject: 'Math', location: 'Kolkata' },
      { name: 'Pooja', subject: 'Science', location: 'Pune' },
      { name: 'Manish', subject: 'Physics', location: 'Chennai' },
      { name: 'Divya', subject: 'Biology', location: 'Hyderabad' },
      { name: 'Siddharth', subject: 'Chemistry', location: 'Bangalore' },
      { name: 'Meera', subject: 'English', location: 'Delhi' },
      { name: 'Aditya', subject: 'Math', location: 'Mumbai' },
      { name: 'Radha', subject: 'History', location: 'Kolkata' },
      { name: 'Nitin', subject: 'Geography', location: 'Pune' }

    ];

    const filteredTutors = mockTutors.filter(tutor =>
      tutor.location.toLowerCase().includes(location.toLowerCase())
    );

    setResults(filteredTutors);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4  ">
      <h1 className="text-2xl font-bold text-white mb-4">Find Tutors in Your Area</h1>
      <div className="flex flex-col sm:flex-row items-center w-full max-w-md space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-mainGreen-500  bg-black text-white" // Change text color to red
          placeholder="Enter your location"
        />
        <button
          onClick={searchTutors}
          className="w-full sm:w-auto px-4 py-2 bg-mainGreen text-black font-semibold rounded hover:bg-mainGreen-600 focus:outline-none focus:ring-2 focus:ring-mainGreen-500"
        >
          Search
        </button>
      </div>
      <div className="mt-6 w-full max-w-md">
        {results.length > 0 ? (
          results.map((tutor, index) => (
            <div key={index} className="p-4 mb-2 bg-white text-black rounded shadow-md">
              <p><strong>{tutor.name}</strong> - {tutor.subject}</p>
              <p className="text-gray-600">{tutor.location}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No tutors found for the specified location.</p>
        )}
      </div>
    </div>
  );
};

export default TutorSearch;
