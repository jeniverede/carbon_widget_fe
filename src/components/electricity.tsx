import React, { useState } from "react";
import "./electricity.css";

const Electricity: React.FC = () => {
  const [isSustainable, setIsSustainable] = useState<boolean | null>(null);
  const [monthlyEmission, setMonthlyEmission] = useState<number | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSustainable(event.target.value === "yes" ? true : false);
    setMonthlyEmission(null); // Reset monthly emission when user changes selection
  };

  const calculateEmissions = () => {
    // Monthly CO2 emissions from sustainable and non-sustainable sources
    const sustainableEmissionPerKWh = 0.5; // in kgCO2 per kWh
    const nonSustainableEmissionPerKWh = 0.8; // in kgCO2 per kWh
    const hoursInMonth = 24 * 30; // Assuming 30 days in a month

    if (isSustainable !== null) {
      setMonthlyEmission(
        isSustainable
          ? sustainableEmissionPerKWh * hoursInMonth
          : nonSustainableEmissionPerKWh * hoursInMonth
      );
    }
  };

  return (
    <div>
      <p>Is your electricity source sustainable?</p>
      <p>Select yes or no, then click on Calculate to see the result.</p>
      {/* creates the dropdown with selections */}
      <select
        value={isSustainable === null ? "" : isSustainable ? "yes" : "no"}
        onChange={handleSelectChange}
      >
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <button onClick={calculateEmissions}>Calculate</button>
      {monthlyEmission !== null && (
        <div>
          {/* .toFixed(2) limits the calculation to 2 decimal places after monthlyEmission */}
          <p>Your monthly CO2 emissions from electricity are: {monthlyEmission.toFixed(2)} kgCO2</p>
        </div>
      )}
    </div>
  );
};

export default Electricity;
