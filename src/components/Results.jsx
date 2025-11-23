import React from 'react';
import PropTypes from 'prop-types';
import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ userInput }) {
  const resultData = calculateInvestmentResults(userInput || {});

  const initialInvestment = Number(userInput?.initialInvestment) || 0;
  const annualInvestment = Number(userInput?.annualInvestment) || 0;
  const duration = Number(userInput?.duration) || 0;

  const totalAmountInvested = initialInvestment + annualInvestment * duration;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest Earned(Year)</th>
          <th>Total Interest</th>
          <th> Total Capital </th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            annualInvestment * data.year -
            initialInvestment;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Results.propTypes = {
  userInput: PropTypes.shape({
    initialInvestment: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    annualInvestment: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};
