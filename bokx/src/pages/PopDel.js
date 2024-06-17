import React, { useState } from 'react';
import { DiCssTricks } from 'react-icons/di';
import axios from 'axios';

export default function PopDel({ onClose }) {
  const [Email, setEmail] = useState('');
  

  const updateAPIData = async () => {
    

    try {
      const response = await axios.get('https://666fc1610900b5f872481ed7.mockapi.io/Signup');
      const users = response.data;
      const user = users.find(user => user.Email === Email);

      if (user) {
        await axios.delete(`https://666fc1610900b5f872481ed7.mockapi.io/Signup/${user.id}`, {
          Email,
          
        });
        alert('Account deleted successfully');
      
      } else {
        alert('Email not found');
        
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting');
    }
  };

  return (
    <div className='pop-overlay'>
      <div className='pop-container'>
        <button className='close-btn' onClick={onClose}>
          <DiCssTricks />
        </button>
        <div className='pop-content'>
          <h1>Delete Account</h1>
          <input 
            placeholder='Email'
            required 
            type='email'
            className='pop-input'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <button className='reset-btn' onClick={updateAPIData}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
