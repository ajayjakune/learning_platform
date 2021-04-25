import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Body from './components/course_enrollment_component/body';
import Certificate from './components/course_enrollment_component/Certificate';

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/chapter/certificate" component={Certificate} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default App;
