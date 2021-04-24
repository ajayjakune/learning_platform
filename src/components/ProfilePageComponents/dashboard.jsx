import React, { Component } from "react";
import ProfileImage from "./res/profile.jpg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import SeparatorImage from "./res/separator.png";
import Chart from "react-google-charts";
import AssignmentImage from "./res/assignment.png";
import "./css/dashboard.css";
import {dashboardData} from "./data/dashboardData";

const renderDashBoard = (profile, index) => {
    return (
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <Card className="text-center">
                    <Card.Header>Profile Overview</Card.Header>
                    <br></br>
                        <Image
                            className="profileImage"
                            src={ProfileImage}
                            roundedCircle
                        />
                        <Card.Body>
                            <Card.Title>
                                {profile.userName} | {profile.empCode}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {profile.designation}
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                {profile.location}
                            </Card.Subtitle>
                            <Image src={SeparatorImage} fluid />
                            <Card.Text>
                                <div className="leftRight">
                                    <p>Login</p>
                                    <p>
                                        Last Login:- {profile.lastLogin}
                                        <br></br>Platform:- {profile.platform}
                                    </p>
                                </div>

                                <div className="leftRight">
                                    <p>Email</p>
                                    <p>{profile.email}</p>
                                </div>
                            </Card.Text>
                            <Image src={SeparatorImage} fluid />
                            <br></br>
                            <div>
                                <Button variant="primary">
                                    Change Password
                                </Button>
                                <Button variant="primary">
                                    Reset Progress
                                </Button>
                            </div>
                            <div>
                                <Button variant="primary">
                                    More Options
                                </Button>
                            </div>
                            <Card.Text>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
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
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                    <Card.Header>Upcoming Assignments</Card.Header>
                        <Card.Body>
                            <Card.Title>3 Assignments in close due</Card.Title><br></br>
                            <Card.Text>
                            <div className="leftRight">
                                    <p><Image className="iconImage" src={AssignmentImage} fluid />  Assignment 1</p>
                                    <p>Due:- This Week</p>
                                </div>
                                
                                <div className="leftRight">
                                    <p><Image className="iconImage" src={AssignmentImage} fluid />  Assignment 2</p>
                                    <p>Due:- This Week</p>
                                </div>

                                <div className="leftRight">
                                    <p><Image className="iconImage" src={AssignmentImage} fluid />  Assignment 3</p>
                                    <p>Due:- Next Week</p>
                                </div>
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
    )
}

class DashBoard extends Component {
    state = {};
    render() {
        return (
            <div class="container">
                {dashboardData.map(renderDashBoard)}
            </div>
        );
    }
}

export default DashBoard;
