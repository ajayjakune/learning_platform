import React, { useState, useEffect } from 'react';
import RelatedCourse from './relatedCourses';
import CourseDetails from './courseDetails';
import CourseBanner from './courseBanner';
import CourseEnrollCard from './courseEnrollCard';
import axios from 'axios';

const CourseContent = (props) => {

    const courseId = props.match.params.id;
    const [courseData, setCourseData] = useState(null);
    const [syllabus, setSyllabus] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/course/${courseId}`)
            .then(res => {
                setCourseData(res.data)
                axios.get(`http://localhost:5000/syllabus/${courseId}`)
                    .then(res1 => setSyllabus(res1.data.syllabus))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [courseId])

    return (
        <>
            {courseData ?
                <div>
                    <div>
                        <CourseEnrollCard
                            courseImg={courseData.course_photo}
                            courseTitle={courseData.course_name}
                        />
                        <CourseBanner
                            courseBanner={courseData.course_banner}
                            courseTitle={courseData.course_name}
                            courseDomain={courseData.domain.domain_name}
                            enrollments={courseData.total_enrollments}
                        />
                        <CourseDetails
                            cousrseDes={courseData.course_description}
                            courseSyllabus={syllabus}
                        />
                    </div>
                    <RelatedCourse />
                </div>
                :
                null
            }
        </>
    )
}

export default CourseContent;