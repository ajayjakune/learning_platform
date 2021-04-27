import React, { Component } from 'react';
import { Button, Jumbotron, Table } from 'react-bootstrap';
import './css/courseDetails.css';

class courseDetails extends Component {
    render() {
        return (
            <div className="total">
                {/* <div classname="about-course">
                    <article className="container about-align">
                        <li class="list-group-item active" aria-current="true"><h4> About Course</h4></li>
                        <li class="list-group-item"><p>{this.props.cousrseDes}</p></li>
                    </article>
                </div> */}
                {/* <div className="syllabus">
                    <article className="container">                       
                        <ul class="list-group">
                            <li class="list-group-item active" aria-current="true"> <h4>Syllabus</h4></li>
                        </ul>
                        {
                            this.props.courseSyllabus.map((chapter,index) => {
                                return(
                                <ul key={index} class="list-group">
                                    <li class="list-group-item"><h5>{chapter.title}</h5></li>
                                       { chapter.lectures.map( (topic, index1) => 
                                            <li key={index1} class="list-group-item">{topic.title}</li>
                                        )}
                                </ul>
                                )
                            })
                        }
                    </article>
                </div> */}

                <Table striped hover variant="dark" className="text-center lead border-left border-right" responsive="sm" >
                    <thead>
                        <tr>

                            <th>Domain</th>
                            <th>Level</th>
                            <th>Enrollment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{this.props.courseDomain}</td>
                            <td>Beginner</td>
                            <td>{this.props.enrollments}</td>
                        </tr>
                    </tbody>
                </Table>

                <Jumbotron style={{ "margin-top": "30px" }}>
                    <h1 className="display-4">About Course</h1>
                    <h6 className="lead">
                        {this.props.cousrseDes}
                    </h6>
                    <hr className="my-4"></hr>
                    <div className="row">
                        <p className="lead">
                            <a href="#syllabus" className="btn btn-outline-primary" variant="primary">View Syllabus</a>
                        </p>
                        <p className="lead">
                            <a href="#related_courses" className="btn btn-outline-primary" variant="primary">View Related Courses</a>
                        </p>
                    </div>
                </Jumbotron>
                <p id="syllabus" />
                <div >
                    <Table striped bordered hover variant="dark" responsive="sm">
                        <thead>
                            <tr>
                                <th>
                                    <h3 className="display-4">Syllabus</h3>
                                </th>
                            </tr>
                        </thead>
                        {this.props.courseSyllabus.map((chapter, index) => {
                            return (
                                <tr key={index}>
                                    <td><h4>{chapter.title}</h4>
                                        {chapter.lectures.map((topic, index1) =>
                                            <td key={index1}>
                                                {topic.title}
                                            </td>
                                        )}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </Table>
                </div>
                <p id="related_courses" />
            </div>
        )
    }
}

export default courseDetails;
