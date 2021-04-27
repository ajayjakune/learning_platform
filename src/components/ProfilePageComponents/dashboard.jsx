import React,{ useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import SeparatorImage from "./res/separator.png";
import Chart from "react-google-charts";
import AssignmentImage from "./res/assignment.png";
import "./css/dashboard.css";
import axios from "axios";


const RenderDashBoard = (props) => {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <Card className="text-center card-profile">
          <Card.Header className="card-profile-header">Profile Overview</Card.Header>
          <br></br>
          <Image className="profileImage" src={props.userData["profile_photo"]} roundedCircle />
          <Card.Body className="card-profile-body">
            <Card.Title>
              {props.userData["first_name"]} {props.userData["last_name"]}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Intern</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Pune</Card.Subtitle>
            <Image src={SeparatorImage} fluid />
            <Card.Text>
              <div className="leftRight">
                <p>Last Login</p>
                <p>{props.userData["last_login"]}</p>
              </div>

              <div className="leftRight">
                <p>Email</p>
                <p>{props.userData["email"]}</p>
              </div>
            </Card.Text>
            <Image src={SeparatorImage} fluid />
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-6 col-md-12">
        <Card className="card-profile">
          <Card.Header className="card-profile-header">Insights</Card.Header>
          <Card.Body className="card-profile-body">
            <Card.Text>
              <Chart
                width={"auto"}
                height={"auto"}
                chartType="PieChart"
                loader={'Loading Chart'}
                data={[
                  ["Course", "No. of Courses"],
                  ["Web Dev", 2],
                  ["AI", 2],
                ]}
                options={{
                  title: "Domain Wise Insights",
                  is3D: true,
                }}
                rootProps={{ "data-testid": "2" }}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-profile">
          <Card.Header className="card-profile-header">Pending Final Assignments</Card.Header>
          <Card.Body className="card-profile-body">
            <Card.Text>
              { props.assignments.map((course, index) => (
                  <div key={index} className="leftRight">
                    <p>
                      <Image className="iconImage" src={AssignmentImage} fluid /> {course.course.course_name}
                    </p>
                  </div>
              ))
              }
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

function DashBoard() {
  const [userData, setUserDate] = useState({});
  const [pendingAssignments, setPendingAssignments] = useState([])

  useEffect(() => {
      axios
      .get(`http://localhost:5000/user/${localStorage.getItem('userid')}`)
      .then((res) => {
        setUserDate(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });

      axios.get(`http://localhost:5000/pendingassignments`,{headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}`}})
      .then((res) => setPendingAssignments(res.data))
      .catch((err) => console.log(err))

      // axios.get(`http://localhost:5000/profileChart`,{headers: { 'Authorization': `Bearer ${localStorage.getItem("jwt")}`}})
      // .then((res) => console.log(res.data))
      // .catch((err) => console.log(err))
  }, []);
  

  return <div className="container">{
    <RenderDashBoard userData={userData} assignments={pendingAssignments}/>
    }</div>;
}

export default DashBoard;
