import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom"

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "", role: "user" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   try{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    navigate("/dashbpard");
    
    alert("Register successful")
   }catch(err){
    alert("Unable to register")
   }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Register</h2>
      <input name="username" onChange={handleChange} placeholder="Username" className="p-2 border w-full" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" className="p-2 border w-full" />
      <select name="role" onChange={handleChange} className="p-2 border w-full">
        <option value="user">User</option>
        <option value="verifier">Verifier</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      <p className="flex items-center justify-center"   > 
      already have an acc ? 
      <Link  to="/login" className="font-extrabold">login</Link>
      </p>
    </form>
  );
};

export default Register;
