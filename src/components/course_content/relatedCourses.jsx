import React, { useState, useEffect } from 'react'
import './css/relatedCourses.css';
import RelatedCourseCard from './relatedCourseCard';
import axios from 'axios';

const RelatedCourses = (props) => {

    const domainId = "60815a1b4643754a9c2f382b";
    // const domainId = props.match.params.domainId;
    const [courseList, setCourseList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/${domainId}/courses`)
            .then(res => {
                setCourseList(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [domainId])

    return (
        <div className="container-fluid bottom-parent">
            <hr className="border border-primary"></hr>
            <h2 className="text-center">Related Courses</h2>
            <hr className="border border-primary"></hr>
            <div className="row justify-content-center">
                {
                    courseList.map((course, index) =>
                        <RelatedCourseCard key={index}
                            title={course.course_name}
                            for='course' description={course.course_description}
                            image={course.course_photo}
                            cardId={course._id}
                            buttonText={"view course"} />
                    )
                }
            </div>
        </div>
    )
}

export default RelatedCourses
