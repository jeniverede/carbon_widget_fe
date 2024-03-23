import React, { useState } from 'react';
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        alert('Email submitted successfully!');
      } else {
        throw new Error('Failed to submit email');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('An error occurred while submitting the email.');
    }
  };

  return (
    <div className='card'>
      <h3>Subscribe to our newsletter for more facts and tips!</h3>
      <div className='input-display'>
        <form 
          onSubmit={handleSubmit}>
          <input
            className='input-form'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
