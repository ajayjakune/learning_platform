import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllCoursesCards from './Courlistpage/AllCoursesCards';
import Homepage from './Homepage/Homepage';
import Course from './course_content/courseContent'



const Main = () => (
    <BrowserRouter>
        <Route exact path='/' component={Homepage} />
        <Route path='/course_list' component={AllCoursesCards} />
        <Route path='/course_content' component={Course} />
    </BrowserRouter>
)

export default Main;