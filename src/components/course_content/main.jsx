import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import Body from '../course_enrollment_component/body';
import Homepage from '../Homepage/Homepage';
import Course from './courseContent';

const Main = () => (
    <BrowserRouter>
        <Route exact path='/' component={Homepage} />
        <Route path='/course_list' component={CourseList} />
        <Route path='/course_content' component={Course} />
        <Route path='/body' component={Body} />
    </BrowserRouter>
)

export default Main;