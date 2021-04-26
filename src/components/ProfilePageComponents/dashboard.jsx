import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import SeparatorImage from "./res/separator.png";
import Chart from "react-google-charts";
import AssignmentImage from "./res/assignment.png";
import "./css/dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";


const RenderDashBoard = (props) => {

  const getOs = () => {
    const os = ['Windows', 'Linux', 'Mac']; // add your OS values
    return os.find(v=>navigator.appVersion.indexOf(v) >= 0);
    }
  return (
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Card className="text-center">
          <Card.Header>Profile Overview</Card.Header>
          <br></br>
          <Image className="profileImage" src={props.userData["profile_photo"]} roundedCircle />
          <Card.Body>
            <Card.Title>
              {props.userData["first_name"]} {props.userData["last_name"]}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Intern</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Pune</Card.Subtitle>
            <Image src={SeparatorImage} fluid />
            <Card.Text>
              <div className="leftRight">
                <p>Login</p>
                <p>
                  Last Login:- {props.userData["last_login"]}
                  <br></br>Platform:- {getOs()}
                </p>
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

      <div class="col-lg-6 col-md-12">
        <Card>
          <Card.Header>Insights</Card.Header>
          <Card.Body>
            <Card.Text>
              <Chart
                width={"auto"}
                height={"auto"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Course", "No. of Learnings"],
                  ["React JS", 11],
                  ["C/C++", 2],
                  ["Python", 2],
                  ["DBMS", 2],
                  ["Java", 7],
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
        <Card>
          <Card.Header>Pending Final Assignments</Card.Header>
          <Card.Body>
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
  }, []);

  return <div class="container">{
    <RenderDashBoard userData={userData} assignments={pendingAssignments}/>
    }</div>;
}

export default DashBoard;
