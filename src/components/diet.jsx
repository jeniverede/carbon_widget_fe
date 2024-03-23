import React, { useState } from 'react';
import "./diet.css";

const Diet = () => {
  // input for daysPerWeek can be a number or a string
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
    <div>
      <p>Enter the number of days you eat meat per week. (1-7):</p>
      <input
        type="number"
        min="1"
        max="7"
        value={daysPerWeek}
        onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
      />
      <button onClick={calculateCarbonProduced}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default Diet;