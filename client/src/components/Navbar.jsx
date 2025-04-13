
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-100 px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">eKYC</Link>
      {user ? (
        <div className="flex gap-4 items-center">
          <span>Hi, {user.username}</span>
          <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link to="/" className="text-blue-600">Login</Link>
          <Link to="/register" className="text-blue-600">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
