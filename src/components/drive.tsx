import React, { useState } from 'react';
import "./drive.css";

// React.FC designates the component as React Functional Component
// this designation works with the implementation of Typescript
const Drive: React.FC = () => {
  // input for daysOfDriving can be a number or a string
  const [daysOfDriving, setDaysOfDriving] = useState <number | ''> ('');
  const [result, setResult] = useState<string>('');

  const calculateCarbonProduced = () => {
    const daysPerWeek: number = 7;
    const distancePerDayMiles: number = 30; // Average distance driven per day in miles
    const fuelEfficiencyMPG: number = 25; // Miles per gallon (MPG) of the vehicle
    const emissionFactorGasoline: number = 19.6; // Emission factor for gasoline in pounds of CO2 per gallon

    // Validates user input for days of driving 
    // parseInt converts daysOfDriving from a string to a number
    const daysOfDrivingNumber = parseInt(daysOfDriving as string);
    if (isNaN(daysOfDrivingNumber) || daysOfDrivingNumber < 1 || daysOfDrivingNumber > 7) {
      setResult("Invalid number of days. Please enter a number between 1 and 7.");
      return;
    }

    // Calculates total distance driven in a week
    const totalDistanceMiles: number = distancePerDayMiles * daysOfDrivingNumber;

    // Calculates total fuel consumed in a week
    const fuelConsumedGallons: number = totalDistanceMiles / fuelEfficiencyMPG;

    // Calculates total carbon produced in a week
    const carbonProducedPounds: number = fuelConsumedGallons * emissionFactorGasoline;

    setResult(`Carbon produced by driving ${daysOfDriving} days a week: ${carbonProducedPounds.toFixed(2)} pounds of CO2.`);
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
