// pages/dashboard.js

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-xl font-bold mb-4">Document Types</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Prescriptions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Medical Scans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Reports
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Recent Prescriptions */}
        <h2 className="text-xl font-bold mb-4">Recent Prescriptions</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Prescription Card Component */}
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">Prescription 1</h3>
            <p className="text-gray-600 mb-2">Medication: Amoxicillin</p>
            <p className="text-gray-600 mb-2">Dosage: 500mg, 3 times a day</p>
            <p className="text-gray-600 mb-2">Issued: 2023-04-15</p>
          </div>
          {/* Add more prescription cards as needed */}
        </div>
      </div>

      {/* User Info */}
      <div className="bg-gray-100 w-64 p-6">
        <h2 className="text-xl font-bold mb-4">Patient Information</h2>
        <p className="mb-2">Name: John Doe</p>
        <p className="mb-2">Sex: Male</p>
        <p className="mb-2">Age: 35</p>
        <p className="mb-2">BMI: 24.7</p>
      </div>
    </div>
  );
};

export default Dashboard;
