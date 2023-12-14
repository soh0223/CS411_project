// Profile.js
import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthday: '',
    email: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the formData to your backend or handle it as needed
    console.log(formData);
    // Add logic to update user profile information
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Birthday:
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        {/* Add other fields as needed */}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
