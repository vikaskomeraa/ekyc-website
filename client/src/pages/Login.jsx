import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    const userData = res.data;
    login(userData);
    if (userData.role === "admin") navigate("/admin");
    else if (userData.role === "verifier") navigate("/verifier");
    else navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Login</h2>
      <input name="username" onChange={handleChange} placeholder="Username" className="p-2 border w-full" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" className="p-2 border w-full" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>

      <h1>Not have a account <Link to="/register" >Register</Link></h1>
    </form>
  );
};

export default Login;
