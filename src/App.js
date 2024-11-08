import React, { useState } from 'react';
import Landing from './components/Landing';
import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = (username, password) => {
    // Replace this with actual login logic or authentication API call
    if (username && password) {
      setIsLoggedIn(true); // If login is successful, set to true
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <Landing /> // Show Landing page if logged in
      ) : (
        <LoginPage onLogin={handleLogin} /> // Show Login page if not logged in
      )}
    </div>
  );
};

export default App;
