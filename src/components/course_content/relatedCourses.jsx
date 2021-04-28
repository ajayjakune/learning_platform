import React, { useState, useEffect } from 'react'
import './css/relatedCourses.css';
import RelatedCourseCard from './relatedCourseCard';
import axios from 'axios';

const RelatedCourses = (props) => {

    const [courseList, setCourseList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/${props.domainid}/courses`)
            .then(res => {
                setCourseList(res.data)
            })
            .catch(err => console.log(err))
    }, [props.domainid])

    return (
        <div className="container-fluid bottom-parent">
            <hr className="border-primary"></hr>
            <h2 className="text-center">Related Courses</h2>
            <hr className="border-primary"></hr>
            <div className="row justify-content-center">
                {
                    courseList.map((course, index) =>
                        <RelatedCourseCard key={index}
                            title={course.course_name}
                            for='course' description={course.course_description}
                            image={course.course_photo}
                            cardId={course._id}
                            buttonText={"View course"} />
                    )
                }
            </div>
        </div>
    )
}

export default RelatedCourses
