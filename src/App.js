import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginSignUp from "./components/Auth/loginSignUp";
import CourseContent from "./components/course_content/courseContent";
import Homepage from "./components/Homepage/Homepage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from "./components/PageNotFound/pageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/auth' component={LoginSignUp} />
        <Route exact path='/' component={Homepage} />
        <Route path='/Homepage' component={Homepage} />
        <Route path='/course/:id' component={CourseContent} />
        <Route path='*' component={PageNotFound} />
      </Switch>
      <Footer />

    </BrowserRouter>

  )
}


export default App;
