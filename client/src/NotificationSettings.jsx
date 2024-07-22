// src/NotificationSettings.jsx
import React, { useState } from 'react';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    email: false,
    sms: false,
    inApp: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to the server)
    console.log('Notification settings updated:', notifications);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 p-9 sm:p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl text-black font-bold mb-6">Notification Settings</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email Notifications</label>
            <input
              type="checkbox"
              id="email"
              name="email"
              checked={notifications.email}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Enable email notifications</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="sms">SMS Notifications</label>
            <input
              type="checkbox"
              id="sms"
              name="sms"
              checked={notifications.sms}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Enable SMS notifications</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="inApp">In-App Notifications</label>
            <input
              type="checkbox"
              id="inApp"
              name="inApp"
              checked={notifications.inApp}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Enable in-app notifications</span>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-mainGreen text-white rounded-lg hover:bg-mainGreen transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotificationSettings;
