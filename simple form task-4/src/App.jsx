import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="bg-white shadow-md p-6 mx-auto my-12 max-w-lg md:max-w-2xl lg:max-w-4xl rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="font-bold text-blue-500">
          <label className="block mb-2">Name:</label>
          <input
            className="w-full border-2 border-blue-300 rounded-md p-2 font-bold text-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="font-bold text-blue-500">
          <label className="block mb-2">Email:</label>
          <input
            className="w-full border-2 border-blue-300 rounded-md p-2 font-bold text-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          className="bg-blue-500 text-white font-bold rounded-md px-6 py-3 text-xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          type="submit"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow">
          <h3 className="text-2xl text-purple-500 font-bold mb-4">Submitted Data</h3>
          <p className="text-pink-400 font-bold">
            <strong className="text-purple-500">Name:</strong> {submittedData.name}
          </p>
          <p className="text-pink-400 font-bold mt-2">
            <strong className="text-purple-500">Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
