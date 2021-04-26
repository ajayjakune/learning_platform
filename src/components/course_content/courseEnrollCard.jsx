import React, { useState, useEffect } from 'react'
import './css/courseEnrollCard.css';
import {Link} from 'react-router-dom'
import axios from 'axios';


const CourseEnrollCard = (props) => {

    const courseId = props.courseId;
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        setIsEnrolled(props.enrollState)
    }, [props.enrollState])

    const handleEnrollment = () => {
        axios.post('http://localhost:5000/enroll',
                    {userid:localStorage.getItem("userid"), courseid: courseId},
                    {headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}`}})
        .then(() => setIsEnrolled(true))
        .catch(err => console.log(err))
    }

    return (
        <div className="card card-size float-card sticky">
            <img className="card-img-top" src={`${props.courseImg}`} alt="course" />
            <div className="card-body">
                <h5 className="card-title text-center">{props.courseTitle}</h5>
                { isEnrolled ?
                    <Link to='/course' className="btn btn-primary">Go to Course</Link>
                    :
                    <button className="btn btn-primary" onClick={handleEnrollment}>Enroll for the Course</button>
                }
            </div>
        </div>
    )
}

export default CourseEnrollCard
