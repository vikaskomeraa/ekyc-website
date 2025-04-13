import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const UploadDocs = () => {
  const { user } = useContext(AuthContext);
  const [aadhaar, setAadhaar] = useState(null);
  const [pan, setPan] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async (doc, file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('username', user.username);
    formData.append('docType', doc);
    return axios.post('http://localhost:5000/api/upload', formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (aadhaar) await handleUpload('aadhaar', aadhaar);
      if (pan) await handleUpload('pan', pan);
      setMessage('Documents uploaded!');
    } catch {
      setMessage('Upload failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Upload Documents</h2>
      <input type="file" onChange={(e) => setAadhaar(e.target.files[0])} />
      <label className="block text-sm">Upload Aadhaar</label>

      <input type="file" onChange={(e) => setPan(e.target.files[0])} />
      <label className="block text-sm">Upload PAN</label>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="text-green-600 mt-2">{message}</p>}
    </form>
  );
};

export default UploadDocs;
