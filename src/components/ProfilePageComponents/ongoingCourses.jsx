import React,{ useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

function OngoingCourses() {
  const [enrolledCourseData, setEnrolledCourseData] = useState([]);
  const userid = localStorage.getItem('userid');
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${userid}`)
      .then((res) => {
        setEnrolledCourseData(res.data.courses);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userid]);

  return (
    <div className="container">
      <div className="row justify-content-center">{
        enrolledCourseData.map( (course, index) => 
          course.isCompleted === false &&  
          <CourseCard key={index} img={course.courseid.course_photo} name={course.courseid.course_name} text={'Resume'}/>
        )
      }</div>
    </div>
  );
}

export default OngoingCourses;
