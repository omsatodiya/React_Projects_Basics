import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">User Profile</h1>
        <p className="text-2xl text-gray-700">User ID: {userid}</p>
      </div>
    </div>
  );
}

export default User;
