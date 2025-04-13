import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.username}</h1>
      <p>Your role: <strong>{user?.role}</strong></p>
      {user?.role === "user" && (
        <Link to="/upload" className="text-blue-600 underline mt-4 block">
          Upload Your KYC Document
        </Link>
      )}
    </div>
  );
};

export default Dashboard;
