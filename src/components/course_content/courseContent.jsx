import React from 'react';
import Header from './header';
import Footer from './footer';
import RelatedCourse from './relatedCourses';
import CourseDetails from './courseDetails';
import CourseBanner from './courseBanner';
import CourseEnrollCard from './courseEnrollCard';

class Course extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <CourseEnrollCard />
                    <CourseBanner />
                    <CourseDetails />
                </div>
                <RelatedCourse />
                <Footer />
            </div>
        )
    }
}

export default Course;