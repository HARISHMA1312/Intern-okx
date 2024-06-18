import React, { useState } from 'react';
import { DiCssTricks } from 'react-icons/di';
import axios from 'axios';

export default function Pop({ onClose }) {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Confirm, setConfirm] = useState('');

  const updateAPIData = async () => {
    if (password !== Confirm) {
      alert('passwords do not match');
      return;
    }

    try {
      const response = await axios.get('https://666fc1610900b5f872481ed7.mockapi.io/Signup');
      const users = response.data;
      const user = users.find(user => user.email === email);

      if (user) {
        await axios.put(`https://666fc1610900b5f872481ed7.mockapi.io/Signup/${user.id}`, {
          email,
          password,
          Confirm
        });
        alert('password updated successfully');
      
      } else {
        alert('email not found');
        
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
          <h1>Reset password</h1>
          <input 
            placeholder='email'
            required 
            type='email'
            className='pop-input'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input 
            placeholder='New password'
            required type='password' 
            className='pop-input'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input 
            placeholder='Confirm password' 
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
