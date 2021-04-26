import axios from "axios";
import React, { useState, useEffect} from "react";
import CourseCard from "./CourseCard";

function CompletedCourses() {
    const [completedCourses, setCompletedCourses] = useState([])
    const userid = localStorage.getItem('userid');
    useEffect(() => {
        axios
        .get(`http://localhost:5000/user/${userid}`)
        .then((res) => {
            setCompletedCourses(res.data.courses);
        })
        .catch((e) => {
            console.log(e);
        });
    }, [userid]);

    return (
        <div className="container-profile" style={{height:"100vh"}}>
            <div className="row justify-content-center">
            {
                completedCourses.map( (course, index) => 
                    course.isCompleted === true &&  
                    <CourseCard key={index} img={course.courseid.course_photo} name={course.courseid.course_name} text={'View Certificate'}/>
                )
            }
            </div>
        </div>           
    );
}

export default CompletedCourses
