import React, { useState } from 'react';

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
    <div>
      <h2>Enter Your Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Subscribe;
