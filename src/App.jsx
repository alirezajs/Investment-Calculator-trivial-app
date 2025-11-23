import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Allow typing '-' or clearing the input without immediately coercing to 0
  const inputIsValid = Number(userInput.duration) >= 0;

  function handleChange(event) {
    const { name, value } = event.target;
    // Allow empty string or lone '-' while typing. Otherwise store a Number.
    const nextValue = value === '' || value === '-' ? value : Number(value);

    setUserInput((prevInput) => ({
      ...prevInput, // need to spread the previous state as we are only updating one field
      [name]: nextValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && (
        <p className="center">
          Please enter a valid initial investment amount.
        </p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
