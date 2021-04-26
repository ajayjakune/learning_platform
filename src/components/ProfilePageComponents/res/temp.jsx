import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { CourseData } from "./data/CourseData";
import { useState, useEffect } from "react";
import axios from "axios";
const renderCard = (card, index) => {
  return (
    <div class="col-lg-3 col-md-6">
      <Card key={index}>
        <Card.Img variant="top" src={card.Photo} style={{ height: "15rem", padding: "20px" }} />
        <Card.Body>
          <Card.Title>{card.Name}</Card.Title>
          <Card.Text>{card.Description}</Card.Text>

          <div style={{ paddingBottom: 20 }}>
            <ProgressBar
              style={{ borderRadius: 18 }}
              variant="success"
              now={card.Progress}
              label={`${card.Progress}%`}
            />
          </div>

          <Button variant="primary" style={{ borderRadius: 12 }}>
            Resume
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

function OngoingCourses() {
  const [enrolledCourseData, setEnrolledCourseData] = useState({});
  const userid = "60829ef99ee5000804f5a22e";
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

  let idArr = [];
  for (let i = 0; i < enrolledCourseData.length; i++) {
    idArr.push(enrolledCourseData[i]["courseid"]);
  }
  let data = [];
  idArr.map((id) => {
    let course;
    axios
      .get(`http://localhost:5000/course/${id}`)
      .then((res) => {
        data.push(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  // let CourseData = data.map((d) => {
  //   return {
  //     Name: d["course_name"],
  //     Description: d["course_description"],
  //     Category: "Web-Development",
  //     Photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
  //     Progress: "50",
  //     Completed: "No",
  //   };
  // });
  console.log(data);
  return (
    <div class="container">
      <div class="row justify-content-center">{CourseData.map(renderCard)}</div>
    </div>
  );
}

export default OngoingCourses;
