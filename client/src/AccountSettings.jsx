// src/AccountSettings.jsx
import React, { useState } from 'react';

const AccountSettings = () => {
  const [account, setAccount] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log('Account updated:', account);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 p-9 sm:p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl text-black font-bold mb-6">Account Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={account.username}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-gray-700 mb-2">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={account.currentPassword}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 mb-2">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={account.newPassword}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={account.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-mainGreen text-black rounded-lg hover:bg-mainGreen transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
