import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput((prevInput) => ({
      ...prevInput, // need to spread the previous state as we are only updating one field
      [name]: Number(value),
    }));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment Amount:</label>
          <input
            id="initial-investment"
            type="number"
            name="initial-investment"
            required
            value={userInput.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment Amount:</label>
          <input
            id="annual-investment"
            type="number"
            name="annual-investment"
            required
            value={userInput.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return:</label>
          <input
            id="expected-return"
            type="number"
            name="expected-return"
            required
            value={userInput.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration:</label>
          <input
            id="duration"
            type="number"
            name="duration"
            required
            value={userInput.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
}
