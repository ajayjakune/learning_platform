import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import SeparatorImage from "./res/separator.png";
import Chart from "react-google-charts";
import AssignmentImage from "./res/assignment.png";
import "./css/dashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
const renderDashBoard = (userData) => {
  return (
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Card className="text-center">
          <Card.Header>Profile Overview</Card.Header>
          <br></br>
          <Image className="profileImage" src={userData["profile_photo"]} roundedCircle />
          <Card.Body>
            <Card.Title>
              {userData["first_name"]} {userData["last_name"]}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Intern</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Pune</Card.Subtitle>
            <Image src={SeparatorImage} fluid />
            <Card.Text>
              <div className="leftRight">
                <p>Login</p>
                <p>
                  Last Login:- {userData["last_login"]}
                  <br></br>Platform:- Windows 10
                </p>
              </div>

              <div className="leftRight">
                <p>Email</p>
                <p>{userData["email"]}</p>
              </div>
            </Card.Text>
            <Image src={SeparatorImage} fluid />
            <br></br>
            <div>
              <Button variant="primary">Change Password</Button>
              <Button variant="primary">Reset Progress</Button>
            </div>
            <div>
              <Button variant="primary">More Options</Button>
            </div>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
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
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Upcoming Assignments</Card.Header>
          <Card.Body>
            <Card.Title>3 Assignments in close due</Card.Title>
            <br></br>
            <Card.Text>
              <div className="leftRight">
                <p>
                  <Image className="iconImage" src={AssignmentImage} fluid /> Assignment 1
                </p>
                <p>Due:- This Week</p>
              </div>

              <div className="leftRight">
                <p>
                  <Image className="iconImage" src={AssignmentImage} fluid /> Assignment 2
                </p>
                <p>Due:- This Week</p>
              </div>

              <div className="leftRight">
                <p>
                  <Image className="iconImage" src={AssignmentImage} fluid /> Assignment 3
                </p>
                <p>Due:- Next Week</p>
              </div>
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

function DashBoard() {
  const [userData, setUserDate] = useState({});
  const userid = "60829ef99ee5000804f5a22e";
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${userid}`)
      .then((res) => {
        setUserDate(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userid]);

  return <div class="container">{renderDashBoard(userData)}</div>;
}

export default DashBoard;
