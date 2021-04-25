import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginSignUp from './components/Auth/loginSignUp';
import CourseContent from './components/course_content/courseContent';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={LoginSignUp} />
        <Route path='/Homepage' component={Homepage} />
        <Route path='/course/:id' component={CourseContent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
