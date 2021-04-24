import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllCoursesCards from './components/Courlistpage/AllCoursesCards';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/homepage" exact component={Homepage}/>
          <Route path="/domain/:id" component={AllCoursesCards}/>      
        </Switch>
        <Footer/> 
      </BrowserRouter>

    </div>
  );
}

export default App;
