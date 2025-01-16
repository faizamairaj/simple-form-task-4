import React, { useState } from 'react';
import './App.css'

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
    <div className='bg-white shadow-md m-48'>
      <form onSubmit={handleSubmit}>
        <div className='font-bold text-blue-300'>
          <label>Name: </label>
          <input  className='font-bold text-pink-400'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div> <br/>
        <div className='font-bold text-blue-300'>
          <label>Email: </label>
          <input className='font-bold text-pink-400'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div> <br/>
        <button className='bg-blue-500 text-white font-bold rounded-md p-3 text-2xl' type="submit">Submit</button>
      </form> <br/>

      {submittedData && (
        <div >
          <h3 className='text-3xl text-purple-500 font-bold'>Submitted Data</h3><br/>
          <p className='text-pink-400 font-bold'><strong className='text-purple-500'>Name:</strong> {submittedData.name}</p><br/>
          <p className='text-pink-400 font-bold'><strong  className='text-purple-500'>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
