import React, { useState, useEffect } from 'react';
import CourseDetails from './courseDetails';
import CourseBanner from './courseBanner';
// import CourseEnrollCard from './courseEnrollCard';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import RelatedCourses from './relatedCourses';
import { Link } from 'react-router-dom';
import './css/courseEnrollCard.css';

const CourseContent = (props) => {

    const courseId = props.match.params.id;
    const [courseData, setCourseData] = useState(null);
    const [syllabus, setSyllabus] = useState([]);
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        axios.post('http://localhost:5000/checkenrollment',
            { userid: localStorage.getItem("userid"), courseid: courseId },
            { headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}` } })
            .then(res2 => {
                setIsEnrolled(res2.data.status)
                axios.get(`http://localhost:5000/course/${courseId}`)
                    .then(res => {
                        setCourseData(res.data)
                        axios.get(`http://localhost:5000/syllabus/${courseId}`)
                            .then(res1 => setSyllabus(res1.data.syllabus))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }).catch(e => console.log(e))
            window.scrollTo(0, 0);
    }, [courseId])

    const handleEnrollment = () => {
        axios.post('http://localhost:5000/enroll',
            { userid: localStorage.getItem("userid"), courseid: courseId },
            { headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}` } })
            .then(() => {
                axios.post(`http://localhost:5000/incrementEnroll/${courseId}`)
                    .then(() => setIsEnrolled(true))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {courseData ?
                <div>
                    <div>
                        <div className="card card-size float-card sticky border border-dark">
                            <img className="card-img-top" src={`${courseData.course_photo}`} alt="course" />
                            <div className="card-body row justify-content-center">
                                <h5 className="card-title text-center">{courseData.course_name}</h5>
                                {isEnrolled ?
                                    <Link to={`/course-content/${courseId}`} className="btn lead btn-outline-primary">Go to Course</Link>
                                    :
                                    <button className="btn lead btn-outline-primary" onClick={handleEnrollment}>Enroll for the Course</button>
                                }
                            </div>
                        </div>
                        <CourseBanner
                            courseBanner={courseData.course_banner}
                            courseTitle={courseData.course_name}

                        />
                        <CourseDetails
                            cousrseDes={courseData.course_description}
                            courseSyllabus={syllabus}
                            courseDomain={courseData.domain.domain_name}
                            enrollments={courseData.total_enrollments}
                        />
                    </div>
                    <RelatedCourses domainid={courseData.domain._id} />
                    <br />
                </div>
                :
                <div className="row justify-content-center jumbotron">
                    <Spinner animation="border" variant="primary" />
                </div>
            }
        </>
    )
}

export default CourseContent;