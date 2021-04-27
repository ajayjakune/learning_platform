import React, { useState } from 'react'
import LoginSignUp from './components/Auth/loginSignUp';
import Main from './Main';

function App() {

  // Checks if the token is present in localStorage, and sets it if not present 
  const token = localStorage.getItem('jwt');

  // Gets set from LoginSignUp Component
  const [authToken, setAuthToken] = useState(token);
  return (
    <div>
      {
        authToken ?
          <Main />
          :
          <LoginSignUp setToken={setAuthToken} />
      }
    </div >
  );
}

export default App;
