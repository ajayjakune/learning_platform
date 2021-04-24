import React, { Component } from 'react'
import './css/courseEnrollCard.css';
import { Link } from 'react-router-dom';

export class CourseEnrollCard extends Component {
    constructor() {
        super();
        this.state = { btn: "Enroll" };
    }

    handleChange() {
        if (this.state.btn === "Enroll") {
            this.setState({ btn: "Go to course" });
        }
    }
    render() {
        return (
            <div className="card card-size float-card sticky">
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="course_img" />
                <div className="card-body">
                    <h5 className="card-title">React JS</h5>
                    <p className="card-text">Enroll for react js course and make your career grow</p>
                    <Link to="/" className="btn btn-primary button-center" onClick={this.handleChange.bind(this)}>{this.state.btn}</Link>
                </div>
            </div>
        )
    }
}

export default CourseEnrollCard;
