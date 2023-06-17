import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
 
    <>
        {loggedIn ? (
          <Home handleLogout={handleLogout} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
    </>
      
  );
};

export default App;
