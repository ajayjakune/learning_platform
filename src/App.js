import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginSignUp from './components/Auth/loginSignUp';
import Certificate from './components/course_enrollment_component/Certificate';
import Main from './Main';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginSignUp} />
          <Route path="/auth" exact component={LoginSignUp} />
          <Route path="/homepage" exact component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
