import React from "react";
import MetaMaskButton from "../../components/MetaMaskButton";
const Admin = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 right-0 m-4">
        <div className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
          <MetaMaskButton />
        </div>
      </div>
    </div>
  );
};

export default Admin;
