import React, { useState } from 'react'
import LoginSignUp from './components/Auth/loginSignUp'
import Main from './Main'

function App() {

  // Checks if the token is present in localStorage, and sets it if not present 
  const [authToken, setAuthToken] = useState(localStorage.getItem('jwt'));

  const handleSetAuth =(token) => {
    setAuthToken(token)
    console.log(token)
  }

  return (
    <div>
        {
          authToken ?
          <Main/>
          : <LoginSignUp setToken={handleSetAuth}/>

        }
    </div >
  );
}

export default App;
