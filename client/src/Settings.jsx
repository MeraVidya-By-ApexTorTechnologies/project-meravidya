import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className="min-h-screen bg-black-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight text-white-900">Settings</h2>

        {/* Settings container */}
        <div className="grid grid-cols-1 sm:grid-row-3 gap-4 mt-6">
          {/* Profile Settings */}
          <div className="bg-white shadow overflow-hidden rounded-lg px-4 py-3">
            <Link
              to="/settings/profile"
              className="block text-gray-600 hover:text-gray-800 transition duration-200"
              activeClassName="font-semibold text-blue-600"
            >
              Profile Settings
            </Link>
          </div>

          {/* Account Settings */}
          <div className="bg-white shadow overflow-hidden rounded-lg px-4 py-3">
            <Link
              to="/settings/account"
              className="block text-gray-600 hover:text-gray-800 transition duration-200"
              activeClassName="font-semibold text-blue-600"
            >
              Account Settings
            </Link>
          </div>

          {/* Notification Settings */}
          <div className="bg-white shadow overflow-hidden rounded-lg px-4 py-3">
            <Link
              to="/settings/notifications"
              className="block text-gray-600 hover:text-gray-800 transition duration-200"
              activeClassName="font-semibold text-blue-600"
            >
              Notification Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
