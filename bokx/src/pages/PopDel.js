import React, { useState } from 'react';
import { DiCssTricks } from 'react-icons/di';
import axios from 'axios';

export default function PopDel({ onClose }) {
  const [email, setemail] = useState('');
  

  const updateAPIData = async () => {
    

    try {
      const response = await axios.get('https://666fc1610900b5f872481ed7.mockapi.io/Signup');
      const users = response.data;
      const user = users.find(user => user.email === email);

      if (user) {
        await axios.delete(`https://666fc1610900b5f872481ed7.mockapi.io/Signup/${user.id}`, {
          email,
          
        });
        alert('Account deleted successfully');
      
      } else {
        alert('email not found');
        
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
            placeholder='email'
            required 
            type='email'
            className='pop-input'
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          
          <button className='reset-btn' onClick={updateAPIData}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
