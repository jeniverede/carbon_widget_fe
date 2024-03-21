import React, { useState } from 'react';
import "./drive.css";

const Drive = () => {
  // input for daysOfDriving can be a number or a string
  const [daysOfDriving, setDaysOfDriving] = useState();
  const [result, setResult] = useState();

  const calculateCarbonProduced = async () => {
    try {
      const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ daysOfDriving }),
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
      <p>Enter the number of days you drive per week (1-7):</p>
      <input
        type="number"
        min="1"
        max="7"
        value={daysOfDriving}
        onChange={(e) => setDaysOfDriving(parseInt(e.target.value))}
      />
      <button onClick={calculateCarbonProduced}>Calculate</button>
      <div>{result}</div>
    </div>
  );
};

export default Drive;
