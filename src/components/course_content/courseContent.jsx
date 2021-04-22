import React from 'react';
import RelatedCourse from './relatedCourses';
import CourseDetails from './courseDetails';
import CourseBanner from './courseBanner';
import CourseEnrollCard from './courseEnrollCard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Course extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <CourseEnrollCard />
                    <CourseBanner />
                    <CourseDetails />
                </div>
                <RelatedCourse />
            </div>
        )
    }
}

export default Course;