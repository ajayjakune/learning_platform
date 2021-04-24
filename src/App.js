import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginSignUp from "./components/Auth/loginSignUp";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={LoginSignUp} />
        <Route path='/Homepage' component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;