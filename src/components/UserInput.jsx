import React from 'react';
import PropTypes from 'prop-types';
export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment Amount:</label>
          <input
            id="initial-investment"
            type="number"
            name="initialInvestment"
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
            name="annualInvestment"
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
            name="expectedReturn"
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

UserInput.propTypes = {
  userInput: PropTypes.shape({
    initialInvestment: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    annualInvestment: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    expectedReturn: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
