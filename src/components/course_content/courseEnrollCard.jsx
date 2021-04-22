import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './css/courseEnrollCard.css';

export class CourseEnrollCard extends Component {
    constructor() {
        super();
        this.state = { btn: "Enroll", link: "/" };
    }

    handleChange() {
        if (this.state.btn === "Enroll") {
            this.setState({ btn: "Go to course" });
        }
        else if (this.state.btn === "Go to course") {
            // this.setState({ link: "/body" });
        }
    }
    render() {
        return (
            <div className="card card-size float-card sticky">
                <iframe className="card-img-top"
                    src="https://www.youtube.com/embed/QFaFIcGhPoM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div className="card-body">
                    <h5 className="card-title">React JS</h5>
                    <p className="card-text">Enroll for react js course and make your career grow</p>
                    <Link to='/body' className="btn btn-primary button-center" onClick={this.handleChange.bind(this)}>{this.state.btn}</Link>
                </div>
            </div>
        )
    }
}

export default CourseEnrollCard;
