import React from "react";
import MetaMaskButton from "../../components/MetaMaskButton";
import Link from "next/link";

const Admin = () => {
  // Dummy hospital data
  const hospitalData = [
    {
      id: 1,
      name: "Hospital A",
      address: "123 Main St, Anytown USA",
      phone: "555-1234",
      email: "info@hospitala.com",
    },
    {
      id: 2,
      name: "Hospital B",
      address: "456 Oak Rd, Somewhere City",
      phone: "555-5678",
      email: "info@hospitalb.com",
    },
    {
      id: 3,
      name: "Hospital C",
      address: "789 Elm St, Elsewhere Town",
      phone: "555-9012",
      email: "info@hospitalc.com",
    },
    {
      id: 4,
      name: "Hospital A",
      address: "123 Main St, Anytown USA",
      phone: "555-1234",
      email: "info@hospitala.com",
    },
    {
      id: 5,
      name: "Hospital B",
      address: "456 Oak Rd, Somewhere City",
      phone: "555-5678",
      email: "info@hospitalb.com",
    },
    {
      id: 6,
      name: "Hospital C",
      address: "789 Elm St, Elsewhere Town",
      phone: "555-9012",
      email: "info@hospitalc.com",
    },
  ];

  return (
    <div className="relative h-screen px-4 py-8">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 rounded-md flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Admin Dashboard</h1>
        <div className="absolute ml-96 m-4">
          <div className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
            <MetaMaskButton />
          </div>
        </div>
      </nav>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Add Patients</h2>
          <Link href="/add-patient">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Go to Add Patient
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Add Hospital</h2>
          <Link href="/add-hospital">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Go to Add Hospital
            </button>
          </Link>
        </div>
      </div>

      {/* Tables */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 ml-4">Hospitals</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Address</th>
                <th className="text-left p-2">Phone</th>
                <th className="text-left p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {hospitalData.map((hospital) => (
                <tr key={hospital.id}>
                  <td className="p-2">{hospital.name}</td>
                  <td className="p-2">{hospital.address}</td>
                  <td className="p-2">{hospital.phone}</td>
                  <td className="p-2">{hospital.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
