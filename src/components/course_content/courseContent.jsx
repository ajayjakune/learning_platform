import React from 'react';
import RelatedCourse from './relatedCourses';
import CourseDetails from './courseDetails';
import CourseBanner from './courseBanner';
import CourseEnrollCard from './courseEnrollCard';

class CourseContent extends React.Component {
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

export default CourseContent;