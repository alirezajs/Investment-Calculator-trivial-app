import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

function App() {
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
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
