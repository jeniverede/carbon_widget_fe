import React, { useState } from "react";
import "./diet.css";

const Diet: React.FC = () => {
  const [daysOfMeatConsumption, setDaysOfMeatConsumption] = useState<
    number | null
  >(null);
  const [result, setResult] = useState<string>("");

  // using Typescript to create interface for EmissionFactors
  interface EmissionFactors {
    meat: number;
  }

  const emissionFactors: EmissionFactors = {
    meat: 27, // Emission factor for beef, most common meat consumed
  };

  // function to calculate carbon footprint of eating meat
  const calculateMeatCarbonFootprint = (
    meatType: keyof EmissionFactors,
    daysPerWeek: number
  ): number => {
    // Calculate total emission based on the selected meat type and days per week
    const totalEmission: number = emissionFactors[meatType] * daysPerWeek;
    return totalEmission;
  };

  // Example usage: Calculate carbon footprint of eating meat(beef) 1 day per week
  const meatType: keyof EmissionFactors = "meat";
  const daysPerWeek: number = 1;
  const carbonFootprint: number = calculateMeatCarbonFootprint(
    meatType,
    daysPerWeek
  );

  // Calculate the string representation of the carbon footprint
  const carbonFootprintString = `Carbon footprint of eating ${meatType} ${daysPerWeek} day(s) per week: ${result} kgCO2.`;

  return (
    <div>
      <p>Enter the number of days you eat beef per week (1-7):</p>
      <input
        type="number"
        min="1"
        max="7"
        value={daysOfMeatConsumption ?? ''}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setDaysOfMeatConsumption(isNaN(value) ? null : value);
        }}
      />
      <button
        onClick={() =>
          setResult(calculateMeatCarbonFootprint("meat", daysOfMeatConsumption ?? 0).toString())
        }
      >
        Calculate
      </button>
      <div>{carbonFootprintString}</div> {/* displays the carbon footprint */}
    </div>
  );
};

export default Diet;



