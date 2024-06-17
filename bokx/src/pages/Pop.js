import React, { useState } from 'react';
import { DiCssTricks } from 'react-icons/di';
import axios from 'axios';

export default function Pop({ onClose }) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Confirm, setConfirm] = useState('');

  const updateAPIData = async () => {
    if (Password !== Confirm) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.get('https://666fc1610900b5f872481ed7.mockapi.io/Signup');
      const users = response.data;
      const user = users.find(user => user.Email === Email);

      if (user) {
        await axios.put(`https://666fc1610900b5f872481ed7.mockapi.io/Signup/${user.id}`, {
          Email,
          Password,
          Confirm
        });
        alert('Password updated successfully');
      
      } else {
        alert('Email not found');
        
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the password');
    }
  };

  return (
    <div className='pop-overlay'>
      <div className='pop-container'>
        <button className='close-btn' onClick={onClose}>
          <DiCssTricks />
        </button>
        <div className='pop-content'>
          <h1>Reset Password</h1>
          <input 
            placeholder='Email'
            required 
            type='email'
            className='pop-input'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            placeholder='New Password'
            required type='password' 
            className='pop-input'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            placeholder='Confirm Password' 
            required type='password' 
            className='pop-input'
            value={Confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button className='reset-btn' onClick={updateAPIData}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
