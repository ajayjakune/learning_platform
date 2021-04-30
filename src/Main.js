import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllCoursesCards from './components/Courlistpage/AllCoursesCards';
import CourseContent from './components/course_content/courseContent'
import DashBoard from './components/ProfilePageComponents/dashboard';
import OngoingCourses from './components/ProfilePageComponents/ongoingCourses'
import CompletedCourses from './components/ProfilePageComponents/CompletedCourses'
import ChatBotButton from './components/ChatbotComponents/chatbotButton'
import Body from './components/course_enrollment_component/body'
import Certificate from './components/course_enrollment_component/Certificate';
import Insights from './components/DashBoard/insights';
import PageNotFound from './components/PageNotFound/pageNotFound';
import About from './components/About/About'


function Main() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/homepage" exact component={Homepage} />
                    <Route path="/domain/:id" component={AllCoursesCards} />
                    <Route exact path="/course/:id" component={CourseContent} />
                    <Route path="/course-content/:id" component={Body} />
                    <Route exact path="/course/:id/certificate" component={Certificate} />
                    <Route path="/user-dashboard" component={DashBoard} />
                    <Route path="/ongoing-courses" component={OngoingCourses} />
                    <Route path="/completed-courses" component={CompletedCourses} />
                    <Route path="/insights" component={Insights} />
                    <Route path="/about-us" component={About} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
                <ChatBotButton />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Main
