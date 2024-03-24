import React, { useState } from 'react';
import "../styles/components/card.css";

const Diet = () => {
  const [daysPerWeek, setDaysPerWeek] = useState();
  const [result, setResult] = useState();

  const calculateCarbonProduced = async () => {
    try {
      const response = await fetch('http://localhost:3000/diet/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ daysPerWeek }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate carbon produced');
      }
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error calculating carbon produced:', error);
      setResult('Error calculating carbon produced');
    }
  };

  return (
    <div className='card'>
      <h2>How many days do you eat meat per week? (1-7):</h2>
      <div className='input-display'>
        <input
          className='input'
          type="number"
          min="1"
          max="7"
          value={daysPerWeek}
          onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
        />
        <button className="calculate-btn"
          onClick={calculateCarbonProduced}>Calculate</button>
      </div>
      <div className='result'>{result}</div>
    </div>
  );
};

export default Diet;